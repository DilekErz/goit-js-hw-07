const kutu=document.querySelector("#name-input");
const name=document.querySelector("#name-output");


kutu.addEventListener("input",(event)=>{
name.textContent=event.currentTarget.value;
});