let root = document.querySelector("#root");
let button = document.querySelector("#fetchBtn");

button.addEventListener("click", getData);

async function getData() {
    let res = await fetch("https://reqres.in/api/users?page=2");
    let data = await res.json();
    displayData(data.data);
}

function displayData(users) {
    users.forEach((user) => {
        let card = document.createElement("div");
        card.className = "card";
        // image creation
        let img = document.createElement("img");
        img.src = user.avatar;
        // name creation
        let name = document.createElement("h3");
        name.textContent = user.first_name + " " + user.last_name;
        // email creation
        let email = document.createElement("p");
        email.textContent = user.email;
        // appending
        card.append(img, name, email);
        root.append(card);
    })
}
   