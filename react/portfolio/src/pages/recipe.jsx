import React, { useState } from "react";
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import "../index.css";
import Highlight from "react-highlight";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

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
        <Box
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxWidth: 1200,
            margin: "auto",
            color: "white",
          }}
        >
          {/* Title and Description */}
          <Box sx={{ textAlign: "center" }}>
            <Typography level="h1" sx={{ color: "white", marginBottom: 2 }}>
              Recipe Finder
            </Typography>
            <Typography level="body-lg" sx={{ color: "lightgray" }}>
              Find recipes based on the ingredients you have at hand. The app
              fetches recipes from the server based on your inputs.
            </Typography>
          </Box>
    
          {/* Two-Column Layout */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {/* Left Column: Working Program */}
            <Card
              sx={{
                padding: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography level="h2" sx={{ textAlign: "center", marginBottom: 2 }}>
                Try It Out
              </Typography>
    
              <form onSubmit={handleSubmit} id="container">
                <Input
                  placeholder="Ingredient 1"
                  value={ingredient1}
                  onChange={(e) => setIngredient1(e.target.value)}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <Input
                  placeholder="Ingredient 2"
                  value={ingredient2}
                  onChange={(e) => setIngredient2(e.target.value)}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <Input
                  placeholder="Ingredient 3"
                  value={ingredient3}
                  onChange={(e) => setIngredient3(e.target.value)}
                  sx={{ marginBottom: 2 }}
                  required
                />
                <Input
                  type="number"
                  placeholder="Number of recipes"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  sx={{ marginBottom: 2 }}
                  min="1"
                  max="10"
                  required
                />
                <Button type="submit" sx={{ marginBottom: 2 }}>
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </form>
    
              {output && (
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "neutral.100",
                    borderRadius: "sm",
                  }}
                  dangerouslySetInnerHTML={{ __html: output }}
                />
              )}
            </Card>
    
            {/* Right Column: Code Block */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#282c34",
                borderRadius: "md",
                padding: 2,
                boxShadow: "sm",
                maxHeight: "1000px",
                overflow: "auto",
              }}
            >
              <Highlight className="language-javascript">{code}</Highlight>
            </Box>
          </Box>
        </Box>
      );
}

export default Recipe;