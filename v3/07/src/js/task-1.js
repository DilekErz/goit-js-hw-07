const katagoribulma=document.querySelector("#categories");
const itemsbulma=document.querySelector(".item");

const allitems=document.querySelectorAll(".item");

const katagorisayisinibulma=allitems.length;
console.log(`Number of categories:${katagorisayisinibulma}`);

allitems.forEach((item)=>{
 const baslik=item.querySelector("h2");
 const elemanlar=item.querySelectorAll("li");
 console.log("Category:"+baslik.textContent);
 console.log("Element:"+elemanlar.length);
});