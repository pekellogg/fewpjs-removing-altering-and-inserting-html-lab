const headerFive = document.createElement("h3");
document.body.appendChild(headerFive);
headerFive.innerHTML = "Does this work?"

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "PK is the champion!";