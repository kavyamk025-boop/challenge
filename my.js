let inp=document.getElementsByTagName("input")[0]
inp.id="inp"
// let h1=document.getElementsByTagName("h1")[0]
let btn=document.getElementsByTagName("button")[0]
btn.id="submit"
btn.addEventListener("click",()=>{

let newh1=document.createElement("h1")
newh1.id="newh1"
let btnn=document.createElement("button")  
btnn.id="btnn"
  let div=document.createElement("div")
  div.id="div"
//   let div = document.createElement("div");
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "10px";
    newh1.innerText+=`hi ${inp.value}`
    btnn.innerText="X"
    
    div.appendChild(newh1)
    div.appendChild(btnn)
    


    
    
btnn.addEventListener("click",()=>
{
    div.remove()
})
document.body.appendChild(div)
inp.value=""
});