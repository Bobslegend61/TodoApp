var items = ["Fetch water", "Visit the stylist", "Go to the library"];

var ul = document.querySelector("ul");
var submitButton = document.getElementById("button");

for (var i = 0; i < items.length; i++) {
    ul.innerHTML += "<li class='collection-item'><div>"+items[i]+"<a href='#' class='secondary-content'><i class='material-icons'>close</i></a></div></li>";
}

submitButton.addEventListener("click", displayItem);
ul.addEventListener("click", close);

function close(e){
    if(e.target.classList.contains("material-icons")){
        ul.removeChild(e.target.parentElement.parentElement.parentElement);
        
    }
}

function displayItem() {
    var inputValue = document.getElementById("icon_prefix2").value;
    
    if(inputValue.trim() == ""){
        alert("Please fill the textarea");
        return false;
    }
    
    ul.innerHTML += "<li class='collection-item'><div>"+inputValue+"<a href='#' class='secondary-content'><i class='material-icons'>close</i></a></div></li>";
}
