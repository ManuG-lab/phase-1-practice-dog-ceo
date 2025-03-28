console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imgContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.style.width = "200px";
                img.style.margin = "10px";
                imgContainer.appendChild(img);
            });
        })
        .catch(error => console.log("Error fetching images:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById("dog-breeds");
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement("li");
                li.innerText = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.log("Error fetching breeds:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dog-breeds").addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change to any color you want
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const breedDropdown = document.getElementById("breed-dropdown");

    breedDropdown.addEventListener("change", function (event) {
        const selectedLetter = event.target.value;
        const breedList = document.getElementById("dog-breeds");
        const breeds = breedList.getElementsByTagName("li");

        for (let breed of breeds) {
            if (breed.innerText.startsWith(selectedLetter)) {
                breed.style.display = "list-item";
            } else {
                breed.style.display = "none";
            }
        }
    });
});
