import React, { useState } from 'react';
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import '../index.css';
import Highlight from 'react-highlight'
import Typography from '@mui/joy/Typography';

function Recipe(){
    const code =`
const container = document.getElementById("container");
const post_url_recipes_1 = "https://dh0wkzi4.run.nodescript.dev/recipe-finder";
const post_url_recipes_2 = "https://dh0wkzi4.run.nodescript.dev/recipes_finder_2";



const output = document.getElementById("output");



container.addEventListener("submit", async function (event) {
    event.preventDefault();

    console.log("Function started");

    const ingredient_1 = document.getElementById("ingredient_1").value;
    const ingredient_2 = document.getElementById("ingredient_2").value;
    const ingredient_3 = document.getElementById("ingredient_3").value;
    const count = document.getElementById("count").value;

    const object = { 
        ingredient_1 : ingredient_1, 
        ingredient_2 : ingredient_2, 
        ingredient_3 : ingredient_3,
        count : count
                    }

    const response = await fetch(post_url_recipes_2, {
        method : "POST",
        headers : {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body : JSON.stringify(object)
        })

    console.log('status:', response.status);

    const html = await response.text();

    output.style.display = 'block';


    output.innerHTML = html; 
    `;

    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');
    const [ingredient3, setIngredient3] = useState('');
    const [count, setCount] = useState(5);
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const postUrlRecipes2 = "https://dh0wkzi4.run.nodescript.dev/recipes_finder_2";

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const requestData = {
            ingredient_1: ingredient1,
            ingredient_2: ingredient2,
            ingredient_3: ingredient3,
            count: count,
        };

        try {
            const response = await fetch(postUrlRecipes2, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(requestData),
            });

            console.log('status:', response.status);

            const html = await response.text();
            setOutput(html);
        } catch (error) {
            console.error('Error fetching data:', error);
            setOutput('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="content app-body">
            <div className="app" id="recipe">
                <Typography level="h2">Recipe Finder</Typography>
                <Typography level="body-md">May take up to 30 seconds</Typography>

                <form onSubmit={handleSubmit} id="container">
                    <input
                        type="text"
                        placeholder="Please enter an ingredient"
                        value={ingredient1}
                        onChange={(e) => setIngredient1(e.target.value)}
                        className="input-recipe"
                        autoComplete="on"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Please enter an ingredient"
                        value={ingredient2}
                        onChange={(e) => setIngredient2(e.target.value)}
                        className="input-recipe"
                        autoComplete="on"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Please enter an ingredient"
                        value={ingredient3}
                        onChange={(e) => setIngredient3(e.target.value)}
                        className="input-recipe"
                        autoComplete="on"
                        required
                    />
                    <input
                        type="number"
                        placeholder="How many recipes would you like"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className="input-recipe"
                        min="1"
                        max="10"
                    />
                    <button type="submit" className="button-recipe">
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
                <br />
                <br />

                <div id="output" style={{ display: output ? 'block' : 'none' }} dangerouslySetInnerHTML={{ __html: output }} />
            </div>
            <div className="code" style={{minWidth: "100%"}}>
                <Highlight className="language-javascript">{code}</Highlight>
            </div>
            
        </div>
    );
}

export default Recipe;