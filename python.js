const button = document.getElementById("load");

const HTML = `<object type="text/html" data="fboop2/build/web/index.html" id="flappy">
              </object>`;

function load() {
    button.insertAdjacentHTML("afterend", HTML);
    console.log("loaded");

    button.textContent = "Re-load";

    button.removeAttribute("onclick");
    button.setAttribute("onclick", "reload()");
}

function reload() {
    var object = document.getElementById("flappy");

    var parent = object.parentNode;
    parent.removeChild(object);
    parent.appendChild(object);

    console.log("reloaded");
    
}