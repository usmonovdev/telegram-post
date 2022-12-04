async function data() {
    let response = await fetch("./users.json", {method: "GET"})

    malumot = await response.json()
    console.log(malumot);
    return malumot;
}
data()

let ul = document.getElementById("ul")
async function ekrangaChiqarish() {
    let malumot = await data()
    malumot.forEach(user => {
        let li = document.createElement("li")
        li.innerHTML = user.name
        ul.appendChild(li)
    });
}
ekrangaChiqarish()