
document.getElementById("fond").addEventListener("click",function(){
    arr= this.value
   document.querySelector(".content").style.backgroundColor=arr ;
 console.log(typeof arr)

})


document.getElementById("txt").addEventListener("click",function(){
    p =document.getElementsByTagName("p");
    arr = this.value;
    if(arr==="italique")
    {
      for(let i in p)
      {
        p[i].removeAttribute("style") ;
        p[i].style.fontStyle="italic"
      }
      
  
    }
    else if(arr==="normal"){
      for(let i in p)
      {
        p[i].removeAttribute("style") ;
  
      }
  
    }
    else if(arr==="souligné")
    {
      for(let i in p)
      {
        p[i].removeAttribute("style") ;
        p[i].style.textDecoration="underline"
      }
    }
  
    else if(arr==="gras")
    {
  
      for(let i in p)
      {
        p[i].removeAttribute("style") ;
        p[i].style.fontWeight ="bold"
      }
    }
  
  
  
  
  })

  
  document.getElementById("police").addEventListener("click",function(){

    p =document.getElementsByTagName("p");
    arr = this.value;
  
    for(let i in p)
    {
  
        p[i].style.fontFamily=arr;
  
    }
  
  
  
  
  
  })

  document.getElementById("polph").addEventListener("click",function(){
    p=document.querySelectorAll("p");
     arr = this.value;
     for(let i in p)
     {
       p[i].removeAttribute("class")
      if(arr==="Times New Roman")
      {
        p[i].classList.add("a") ;
      }
      else if(arr==="Arial")
      {
        p[i].classList.add("b") ;
      }
      else if(arr==="Cambria")
      {
        p[i].classList.add("c") ;
      }
      else if(arr==="cursive")
      {
        p[i].classList.add("d") ;
      }
     }
     
     
   })


   document.getElementById("pcar").addEventListener("click",function(){

  
    p=document.querySelectorAll("p");
     arr = this.value;
     for(let i in p)
     {
      if(arr==="normal")
      {
        p[i].classList.add("e") ;
      }
      else if(arr==="gras")
      {
        p[i].classList.add("f") ;
      }
  
    }
  
  
  })



  document.getElementById("mro").addEventListener("click",function(){

    value = parseInt(document.getElementById("mr").value)  
    arr = document.querySelector("p").textContent.split(" ")
    console.log(arr)
    
      arr[value-1]="<span>"+arr[value-1]+"</span>"

    document.querySelector("p").innerHTML = arr.join(" ")

    console.log( document.querySelector("p").innerHTML)
    document.querySelector("p span").style.color="red"

})




document.getElementById("bim").addEventListener("click",function(){


  document.getElementById("img").style.borderStyle=this.value;  





})