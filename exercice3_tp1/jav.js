html = ["a" ,"b" ,"b","c"]
css =["a" ,"b","a","b"]
jav =["b","c","a","b"]

document.querySelector(".html").addEventListener("click",function(){
        if(document.querySelector(".htmlq").style.display =="none")
        {
            document.querySelector(".htmlq").style.display ="block"
        }
        else {

            document.querySelector(".htmlq").style.display ="none"
        }





})


document.querySelector(".css").addEventListener("click",function(){

    if(document.querySelector(".cssq").style.display =="none")
    {
        document.querySelector(".cssq").style.display ="block"
    }
    else {

        document.querySelector(".cssq").style.display ="none"
    }



})

document.querySelector(".jav").addEventListener("click",function(){

    if(document.querySelector(".javq").style.display =="none")
    {
        document.querySelector(".javq").style.display ="block"
    }
    else {

        document.querySelector(".javq").style.display ="none"
    }


})

var arr =[]
var arr1=[]
var arr2 =[]
document.getElementById("btn").addEventListener("click",function(){

    var a = document.getElementsByClassName("q") ;
    var b = document.getElementsByClassName("qc") ;
    var c = document.getElementsByClassName("qj") ;

   for(let i in  a)
   {
       
       arr.push(a[i].value)

   }



   for(let i in  b)
   {
       
       arr1.push(b[i].value)

   }

   
   for(let i in  c)
   {
       
       arr2.push(c[i].value)

   }

   



for (let i=0 ;i<3;i++)
{
    arr.pop();
    arr1.pop();
    arr2.pop()
}


var tot =0
var total=0
for(let i in arr)
{
    if(arr[i]!="")
    {
        total++
    }
    if (arr[i]!="" && html[i]==arr[i]){
        tot++
}
}


var tot1=0
var total1=0
for(let i in arr1)
{
    if(arr1[i]!="")
    {
        total1++
    }
   if (arr1[i]!="" && css[i]==arr1[i]){
        tot1++
}
}

tot2 =0
var total2=0
for(let i in arr2)
{
    if(arr2[i]!="")
    {
        total2++
    }
   if (arr2[i]!="" && jav[i]==arr2[i]){
            tot2++
    }

}


if( total <3 || total1 <3 || total2<3)
{
    score =0;
       document.getElementsByClassName("content")[0].style.display="none";
      document.querySelector(".f").classList.add("final");
    //    document.getElementById("final").style.display="block"
     document.querySelector(".f span").innerHTML += `${score}`


}
else {
score =tot+tot1+tot2
  document.getElementsByClassName("content")[0].style.display="none";
      document.querySelector(".f").classList.add("final");
    //    document.getElementById("final").style.display="block"
     document.querySelector(".f span").innerHTML += `${score}`
 document.querySelector(".f p").style.display="none";


}











})