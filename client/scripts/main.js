function createHeader() {
    const body = document.getElementById("body");
    const header = document.createElement("header");
    const img = document.createElement("img");
    const label_toDo = document.createElement("label");
    const div_line = document.createElement("div");
    const div_content = document.createElement("div");

    //atributes
    header.id = "mainHeader";
    div_content.id = "mainHeader_content";
    div_line.id = "mainHeader_line";
    img.src = "./assets/settings.svg"
    label_toDo.innerText = "TO DO APP";

    //appends
    header.appendChild(div_line);
    header.appendChild(div_content);
    div_content.appendChild(label_toDo);
    div_content.appendChild(img);
    body.appendChild(header);
}

window.onload = function (e) {
    console.log(e);
    createHeader();
}