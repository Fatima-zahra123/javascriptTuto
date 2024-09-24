
//alert  window.alert() == this.alert() ==alert()

// alert("ooooooh: nooo")

// let confmsg = confirm("are you ready ??")//confirmer qlq chose
// console.log(confmsg) //return true or false 

// if(confmsg==true)
// {
//     console.log("person ready")
// }
// else 
// {
//     console.log("person not ready")
// }

// let promptmsg = prompt("suitable day for you ??" ,"hey from here")  // can take msg and default msg
// console.log(promptmsg)

// let counter =setTimeout( saymsg,5000 ,"fatima zahra") // third parameter is a argument of  saymsg
// function saymsg(user)
// {
//     console.log(`my name is ${user}`)
// }

// console.log(counter)

// let btn = document.getElementById("btn")
// btn.onclick =()=>{
   
// }


// let di = document.getElementById("d");
// let counter =setInterval(() => {
//     di.innerHTML -= 1;
//     if(di.innerHTML==="0")
//    {
//        clearInterval(counter)
//    }
// }, 1000);

// console.log(location)

// location.href = "other link"|| "/#idOfsection"

//location.host ==> give 127.0.0.1:5501 ipserveur+port
// location.hostname ==> ip of server

// console.log(location.host)

// location.reload()
//location.replace("link") ==> remove current page from history and go to new link
// location.assign("link") ==> keep current page in history and go t new link

// Window.open("link","_self or _blanck" ,"width=100,height=200 ,left=10,righ=12")
//Window.close()

//history 
//history.back()==> retour en arriere
//history.forward() ==> retour devant
//history.length ==>longuer de historique la page affiche est inclu

//stop() ==> stopper letelechargement
// print()==> imprimer
//focus()==>afficher la fenetre
// open()==> ouvrir la fenetre
//close()===>fermer la fenetre
//scrollTo(x,y || option ) ==> absolue
//scrollBy(x,y||option)==> relative

// scrollTo({
//     left :1000,
//     right :1000,
//     behavior :"smooth"

// })

// scrollX === PageXOffset ===> cordonne horizontale
// scrollY === PageYOffset 

// window.localStorage is objcet which we stoke key values

// window.localStoage.setItem("color","red") ||  window.localStoage.color="red" ||  window.localStoage["color"]="red"

//  window.localStoage.getItem("color")==>red ||  window.localStoage.color || window.localStoage["color"]
//  window.localStoage.removeItem("key") ==>remove one
//  window.localStoage.clear() ==> remove all
// get key   window.localStoage.key(inddex) ==> give key
let divs = document.querySelectorAll('.pal div');
if(window.localStorage.getItem("color"))
{
    document.querySelector(".t").style.backgroundColor=window.localStorage.getItem("color");
    divs.forEach((div)=>{
        div.classList.remove("active");
        console.log('hh')
    })
    document.getElementById(window.localStorage.getItem("color")).classList.add('active')

}




divs.forEach((div)=>{

    div.addEventListener("click",()=>{
       
       let color= div.id;
        window.localStorage.setItem("color",color);
       document.querySelector(".t").style.backgroundColor=color;

       divs.forEach((div)=>{
           div.classList.remove("active");
           console.log('hh')
       })

       div.classList.add("active")

    })


})



// let array =["fatima","rihab","houriya","meryemm"]
k="ggg"
let [a,b,,d,k]=["fatima","rihab","houriya","meryemm"];

console.log(a)

console.log(b)


console.log(d)

console.log(k)
