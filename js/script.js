window.onload = function CopyrightDate() {
    document.getElementById("CurrentYear").innerHTML = new Date().getFullYear();
}

function Remove() {
    var del = document.getElementById("replace");
    del.remove();
}

function CreateYes() {
    const newdiv = document.createElement("div");
    newdiv.classList.add("jsquestionbox");
    const newp = document.createElement("p");
    const newptext = document.createTextNode("Thanks! Good to have you here. :)");
    newp.appendChild(newptext);
    newdiv.appendChild(newp);
    const element = document.getElementsByTagName("section")[0];
    element.appendChild(newdiv);
}

function CreateNo() {
    const newdiv = document.createElement("div");
    newdiv.classList.add("jsquestionbox");
    const newp = document.createElement("p");
    const newptext = document.createTextNode("That's a shame! Please let me know how I can improve.");
    newp.appendChild(newptext);
    newdiv.appendChild(newp);
    const element = document.getElementsByTagName("section")[0];
    element.appendChild(newdiv);
}