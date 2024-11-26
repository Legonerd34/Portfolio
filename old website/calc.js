const display = document.getElementById('screen');

function append_display(input){
    display.value += input;
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = `error: ${error}`;
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

