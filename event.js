/* 
    button:
    onclick 
    ononcontextmenu
    onmouseenter
    onmouseleave

    window:
    onload
    onscroll
    onresize




    form :
    onfocus
    onblur
    onsubmit












*/

mybtn = document.getElementById("btn");

mybtn.style.color ="red";











mybtn.onclick=function()
{
    console.log("clicked")
}


mybtn.oncontextmenu=function()
{
    console.log("menu click droite")
}

mybtn.onmouseenter=function()
{
    console.log("hey")
}


mybtn.onmouseleave=function()
{
    console.log("by")
}


window.onscroll=function()
{
    console.log("im scrolling")
}


let myinp = document.getElementById("input")

myinp.onfocus=()=>{
    console.log("write text and not a number stupid")
}


myinp.onblur=(e)=>{
    
    console.log("im leaving" ,e)
e.preventDefault();
}

window.onload=()=>{

    myinp.focus()


}

myinp.onfocus=()=>{
  myinp.addEventListener("input",function(e){
      if(e.target.value =="a")
      {
          document.links[0].click()
      }
  })
        
    
    
}
