"use strict"
const form = document.getElementById("form");
const text = document.getElementById("text");
const items = document.getElementById("items")
const search = document.getElementById("search")
const delete_item = document.querySelectorAll(".delete");

form.onsubmit = function (event) {
    event.preventDefault();
    if (text.value.trim() != "") {
        const new_child = document.createElement("li")
        const content = document.createTextNode(text.value)
        const delete_but = document.createElement("button")
        delete_but.className = "delete"
        delete_but.textContent = "X"
        new_child.appendChild(content)
        new_child.appendChild(delete_but)
        new_child.className = "item"
        items.appendChild(new_child)
        items.style.display = "block"

        text.value = ""
    }
}
document.addEventListener("click", function (event) {
    if (event.target.className === "delete") {
        if (confirm("Are You Sure Bro?")) {
            event.target.parentElement.remove()
        }
    }
})
search.onkeyup = function (event) {
    const val = event.target.value.toLowerCase()
    document.querySelectorAll(".item").forEach(function (e) {
        if (!e.textContent.toLowerCase().includes(val)) {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
}