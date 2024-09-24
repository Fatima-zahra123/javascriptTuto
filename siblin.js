// elemnt.nextElementSibling ==> give next element (tag)
// elemnt.nextSibling ==> give next node (tag  or string or comment)
// // elemnt.previousElementSibling ==> give next element (tag)
// elemnt.previousSibling ==> give next node (tag  or string or comment)
// parentelement 
// cloning  ==> element.cloneNode(deep) deep :true or false  copier lelement pour le ajouter 



// true pour copier ce qui est dedans et false pour copier aussi les attributs
el2 = document.querySelector("#d");

el2.onclick = one  ;


function one ()
{
    console.log("hello")
}

function two ()
{
    console.log("heeey")
}


document.querySelector("h1").addEventListener("click" ,function(){
    el1 = document.querySelector("h1").cloneNode(true) ; // a chaque fois il crée une copie
    el1.className = "cloned";
    document.body.appendChild(el1);

}); //can execute many action on same  state : click   

// e.target ===> give element that we do  an event on it e example click 




document.addEventListener("click",function() ///wa can handle  element do
{
  

})