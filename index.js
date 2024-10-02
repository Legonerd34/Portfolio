const button = document.getElementById("load");

const HTML = `<object type="text/html" data="fboop2/build/web/index.html" id="flappy">
              </object>`;

function load() {
    button.insertAdjacentHTML("beforebegin", HTML);
    console.log("loaded");

    button.textContent = "Re-load";

    const nodeMap = button.attributes;

    nodeMap.removeNamedItem("onclick");
    nodeMap.setNamedItem("onclick", "reload()");
}

function reload() {
    var objects = document.getElementById("flappy");

    for(var i = 0; i < objects.length; i++) {

        var obj = objects[i];

        obj.data = obj.data;
    }
}