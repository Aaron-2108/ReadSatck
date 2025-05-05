// selecting popup-box,popup-overlay,add-popup-button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box")
var addbutton=document.getElementById("add-popup-button")

addbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

// selecting cancel  button
var cancelbtn=document.getElementById("cancel-popup")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

// selecting container,Add button,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${description.value}</p>
    
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
     popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}

function setupPlaceholderHandler(inputId, placeholderText) {
    const input = document.getElementById(inputId);

    input.addEventListener("focus", () => {
        input.placeholder = "";
    });

    input.addEventListener("blur", () => {
        if (input.value.trim() === "") {
            input.placeholder = placeholderText;
        }
    });
}

setupPlaceholderHandler("book-title-input", "book-title");
setupPlaceholderHandler("book-author-input", "book-author");
setupPlaceholderHandler("book-description-input", "short-description");
