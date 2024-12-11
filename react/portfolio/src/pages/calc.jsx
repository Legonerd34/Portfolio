import React, { useState } from "react";
import "../assets/highlight.js/styles/atom-one-dark-reasonable.css";
import "../index.css";
import Highlight from "react-highlight";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

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
    <input id="screen" readonly="true" />
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
          Calculator
        </Typography>
        <Typography level="body-lg" sx={{ color: "lightgray" }}>
          A simple calculator to perform basic arithmetic operations. Try it
          out!
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
        {/* Left Column: Calculator */}
        <Card
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography level="h2" sx={{ textAlign: "center", marginBottom: 2 }}>
            Try It Out
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Input
              value={screen}
              readOnly
              sx={{
                marginBottom: 2,
                textAlign: "right",
                backgroundColor: "neutral.100",
                padding: 1,
              }}
            />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
              }}
            >
              {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"].map((item) => (
                <Button
                  key={item}
                  onClick={
                    item === "="
                      ? calculate
                      : item === "AC"
                      ? clearDisplay
                      : () => appendDisplay(item)
                  }
                  sx={{
                    backgroundColor:
                      ["+", "-", "*", "/", "="].includes(item)
                        ? "primary.500"
                        : "neutral.300",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                onClick={clearDisplay}
                sx={{ gridColumn: "span 4", backgroundColor: "error.500" }}
              >
                AC
              </Button>
            </Box>
          </Box>
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
          <Highlight className="language-html">{codeHTML}</Highlight>
          <Highlight className="language-javascript">{codeJS}</Highlight>
        </Box>
      </Box>
    </Box>
  );
}

export default Calc;
