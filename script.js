const searchInput = document.querySelector("#searchInput")
const list = document.querySelector("#list")


//метод indexOf-ищет под строку в строке 
// возврощает позицию первого совпадения,а если оно не найдено то вернёт -1.
//синтаксис: строка.indexOf(что_ищем, [откуда ищем?]);

function isMatching(full, chunk) {
    let pos = full.toLowerCase().indexOf(chunk.toLowerCase());
    let resaut = pos != -1 ? true : false;
    return resaut;
}
searchInput.addEventListener("keyup", (Event) => {
    let items = document.querySelectorAll(".item")
    let value = searchInput.value
    for (let item of items) {
        if (isMatching(item.textContent, value) && value != "") {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }
    }
})