import menuAdd from "./menu_page";

const header_content = document.createElement("div");
const content = document.getElementById("content");
const nav = document.createElement("div");
const logo_image = document.createElement("img");
const myH1 = document.createElement("h1");
const myH3 = document.createElement("h3");

let onMenuPage=true;


function menuPage() {
  if (!onMenuPage){
    header_content.remove();
    console.log(onMenuPage);

    
  
    menuAdd(
      "images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
      "menu yemek paragrafları",
      "content"
    );
    menuAdd(
      "images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
      "menu yemek paragrafları",
      "content"
    );
    menuAdd(
      "images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
      "menu yemek paragrafları",
      "content"
    );
    menuAdd(
      "images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
      "menu yemek paragrafları",
      "content"
    );
    menuAdd(
      "images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
      "menu yemek paragrafları",
      "content"
    );
    onMenuPage=true;
  }
 
}

function homePage() {
  if(onMenuPage){
    console.log(onMenuPage);
    myH1.innerHTML = "Delicious Food";
    myH3.innerHTML = "Tomato is a delicious restaurant website template";
    logo_image.src = "images/restaurant-icon-png-4877.png";
  
    content.setAttribute("id", "content");
    nav.setAttribute("id", "nav");
    header_content.setAttribute("id", "header-content");
    logo_image.setAttribute("id", "logo-image");
  
    navBar();
    content.appendChild(nav);
    content.appendChild(header_content);
    header_content.appendChild(logo_image);
    header_content.appendChild(myH1);
    header_content.appendChild(myH3);
    onMenuPage=false;
  }
 
}
homePage();

function navBar(){

  let arr = ["Tomato", "Menu", "contact"];

  let nav_list = document.createElement("ul");
  nav_list.setAttribute("id", "nav-list");

  for (let i = 0; i <= arr.length - 1; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button"); // create li element.
    button.innerHTML = arr[i];
    li.appendChild(button);

    // assigning text to li using array value.
    li.classList.add("list-item");
    li.setAttribute("style", "display: block;"); // remove the bullets.

    nav_list.appendChild(li); // append li to ul.
  }
  nav.appendChild(nav_list);

}
let buttonlar = document.querySelectorAll("button");
buttonlar[0].addEventListener("click",homePage);
buttonlar[1].addEventListener("click", menuPage);
