const button = document.getElementById("button");

const HTML = `<object type="text/html" data="fboop2/build/web/index.html" id="web">
              </object>`;

function load() {
    button.insertAdjacentHTML("beforebegin", HTML);
    console.log("loaded");
}