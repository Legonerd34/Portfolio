const button = document.getElementById("load");

const HTML = `<object type="text/html" data="fboop2/build/web/index.html" id="flappy">
              </object>`;

function load() {
    button.insertAdjacentHTML("beforebegin", HTML);
    console.log("loaded");

    button.textContent = "Re-load";

    button.removeAttribute("onclick");
    button.setAttribute("onclick", "reload()");
}

function reload() {

    window.onbeforeunload = null;

    var objects = document.getElementById("flappy");

    objects.data = objects.data;

    console.log("reloaded");
    
}