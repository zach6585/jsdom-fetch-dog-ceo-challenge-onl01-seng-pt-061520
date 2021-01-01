console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
        for (let i = 0; i < json["message"].length; i++) {
            let div = document.getElementById("dog-image-container");
            let img = document.createElement("img");
            img.src = json["message"][i];
            div.appendChild(img); 
        }
    })
});