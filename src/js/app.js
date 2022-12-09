import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    const ul = document.querySelector("ul");

    // fetch(url).then((response) => {
    //     response.json().then((responseData) => {
    //         for (let i = 0; i < responseData.results.length; i++) {
    //             let li = document.createElement("li");

    //             li.innerText = responseData.results[i].name;
    //             ul.appendChild(li);
    //         }
    //     });
    // });

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            for (let i = 0; i < responseData.results.length; i++) {
                let li = document.createElement("li");

                li.innerText = responseData.results[i].name;
                ul.appendChild(li);
            }
        });
});
