var request = new XMLHttpRequest();

var searchInput = document.querySelector("#searchInput");
var searchValue = searchInput.value;
console.log(searchValue)
request.open("GET","http://github.com/search/users?q=" + searchValue);

request.onload = function() {
    if(request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        console.log(data);

        var body = document.querySelector("body")
        var container = document.querySelector(".container");
        body.appendChild(container);
        for(var i = 0; i < 6; i++) {
            var imgPlace = document.createElement("div");
            var userNickPlace = document.createElement("p");
            var image = document.createElement("img");
            var imageSrc = data.owner.avatar_url;
            userNickPlace.textContent = data.owner.login;
            image.setAttribute("src", imageSrc);
            imgPlace.appendChild(image);
            imgPlace.appendChild(userNickPlace);
            container.appendChild(userNickPlace);
        }
      
    } 
}

var submitBtn = document.querySelector("#searchBtn");
submitBtn.addEventListener("click", request.onload);

request.send();

