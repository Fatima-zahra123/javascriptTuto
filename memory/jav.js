

window.onload =() =>{

 getint();


}

function getint (){
var img = document.getElementsByTagName('img') ;

for (i=0 ;i<100;i++)
{

    var a = Math.trunc(Math.random()*(img.length))
    var b = Math.trunc(Math.random()*(img.length)) 

     var c= img[a].src ;
     var d = img[b].src;

     img[a].src=d;
     img[b].src=c;





}

}



function cacher()
{  
    var a= document.getElementsByTagName("img");
    for(i=0;i<a.length;i++)
    {
    document.getElementsByTagName("img")[i].style.visibility="hidden" ;

    }
    
}
var arr= new Array() ;
var buffer = new Array()
var glob = new Array()
var score=0;
function flip(a)
{
        buffer.push(a)
       document.getElementById("img"+a).style.visibility="visible" ;
      
       
       arr.push(document.getElementById("img"+a))
       glob.push(document.getElementById("img"+a))
    //    console.log(buffer)
       if(arr.length==2)
       {
        //    console.log(arr)
           if(arr[0].src!=arr[1].src)
           {
               setTimeout(()=>{
                   
                   document.getElementById("img"+buffer[0]).style.visibility="hidden"
                   document.getElementById("img"+buffer[1]).style.visibility="hidden"
                   arr=[]
                   buffer=[]
               },1000)
        }else{
            arr=[]
            buffer=[]
            score++;
            document.getElementById("score").innerHTML = `Le score est : ${score}`
            console.log(c)
        }
       }
       else if (arr.length > 2) {
        

            alert("choose only two");
            arr[2].style.visibility="hidden";

       }
          

        
      

}






document.getElementById("dif").addEventListener("click",function(){


var seconds =30
countDiv = document.getElementById("countdown")

var conteur=setInterval(() => {
    if(seconds===0)
    {

        countDiv.innerHTML = "game is finished";
        clearInterval(conteur)
        for(let i in  document.getElementsByTagName("img"))
        {
            document.getElementsByTagName("img")[i].style.visibility="hidden"
        }
       
    }else{
seconds--
    countDiv.innerHTML =`${seconds}`


    }
    
    

}, 1000);





})

 
