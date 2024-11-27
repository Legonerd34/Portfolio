import React, { useState } from 'react';
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import '../index.css';
import Highlight from 'react-highlight'
import Typography from '@mui/joy/Typography';

function Calc() {

    const [screen, setScreen] = useState("");

    function appendDisplay(input) {
        setScreen((prevScreen) => prevScreen + input);
    }

    function calculate() {
        try {
            
            setScreen((prevScreen) => {
                const result = eval(prevScreen);
                return result === Infinity ? "error: cannot divide by zero" : result;
            });
        } catch (error) {
            setScreen("error: invalid operation");
        }
    }

    function clearDisplay() {
        setScreen("");
    }

    const codeHTML = `
<div id="calculator">
    <input id="screen" readonly="true"/>
    <div id="buttons">
        <button onclick="append_display('+')" class="operator">+</button>
        <button onclick="append_display('7')" class="button">7</button>
        <button onclick="append_display('8')" class="button">8</button>
        <button onclick="append_display('9')" class="button">9</button>
        <button onclick="append_display('-')" class="operator">-</button>
        <button onclick="append_display('4')" class="button">4</button>
        <button onclick="append_display('5')" class="button">5</button>
        <button onclick="append_display('6')" class="button">6</button>
        <button onclick="append_display('*')" class="operator">*</button>
        <button onclick="append_display('1')" class="button">1</button>
        <button onclick="append_display('2')" class="button">2</button>
        <button onclick="append_display('3')" class="button">3</button>
        <button onclick="append_display('/')" class="operator">/</button>
        <button onclick="append_display('0')" class="button">0</button>
        <button onclick="append_display('.')" class="button">.</button>
        <button onclick="calculate()" class="operator">=</button>
        <button onclick="clear_display()" class="operator">AC</button>
    </div>
</div>
`;

    const codeJS = `
const display = document.getElementById('screen');

function append_display(input){
    display.value += input;
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = \`error: \${error}\`;
    }
    finally {
        if (display.value === "Infinity") {
            display.value = "error: cannot divide by zero";
        }
    }
}

function clear_display(){
    display.value = "";
}
`;

    return (
        <div className="content app-body">
            <div className="app">
                <h2 id="calc-title">Calculator</h2>

                <div id="calculator">
                    <input
                        id="screen"
                        readOnly
                        value={screen} 
                    />
                    <div id="buttons">
                        <button onClick={() => appendDisplay('+')} className="operator">+</button>
                        <button onClick={() => appendDisplay('7')} className="button">7</button>
                        <button onClick={() => appendDisplay('8')} className="button">8</button>
                        <button onClick={() => appendDisplay('9')} className="button">9</button>
                        <button onClick={() => appendDisplay('-')} className="operator">-</button>
                        <button onClick={() => appendDisplay('4')} className="button">4</button>
                        <button onClick={() => appendDisplay('5')} className="button">5</button>
                        <button onClick={() => appendDisplay('6')} className="button">6</button>
                        <button onClick={() => appendDisplay('*')} className="operator">*</button>
                        <button onClick={() => appendDisplay('1')} className="button">1</button>
                        <button onClick={() => appendDisplay('2')} className="button">2</button>
                        <button onClick={() => appendDisplay('3')} className="button">3</button>
                        <button onClick={() => appendDisplay('/')} className="operator">/</button>
                        <button onClick={() => appendDisplay('0')} className="button">0</button>
                        <button onClick={() => appendDisplay('.')} className="button">.</button>
                        <button onClick={calculate} className="operator">=</button>
                        <button onClick={clearDisplay} className="operator">AC</button>
                    </div>
                </div>
            </div>

            <div className="code">
                <Highlight className="language-html">
                    {codeHTML}
                </Highlight>

                <Highlight className="language-javascript">
                    {codeJS}
                </Highlight>
            </div>
        </div>
    );
}

export default Calc;
