let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.textContent = "Dodaj 10 elementów listy";
    btn.style.fontSize = "30px";
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    btn.addEventListener("click", (createLiElements))
}

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const liItems = document.createElement("li");
        document.querySelector("ul").appendChild(liItems);
        liItems.textContent = `Element nr ${orderElement++}`;
        liItems.style.fontSize = `${size++}px`;
    }

}

init()