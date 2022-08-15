function menuAdd(path,paragraf,contentAccess){
    let content=document.getElementById(contentAccess);
    let div =document.createElement("div");
    div.classList.add("menu-item");
    let img =document.createElement("img");
    img.classList.add("food-image");
    let p = document.createElement("p");
    p.innerHTML=paragraf;
    img.src=path;
    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    


}
export default menuAdd;