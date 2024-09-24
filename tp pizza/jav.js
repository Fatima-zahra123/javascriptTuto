
function affich()
{
    var elem = document.getElementsByClassName("num");
    
    for ( i=0 ; i<elem.length ;i++){

        elem[i].classList.add("af")
    }
    



}


function  mas()
{

    var elem = document.getElementsByClassName("num");
    
    for ( i=0 ; i<elem.length ;i++){

        elem[i].classList.remove("af")
    }
    



}




function tot()
{

        var in1 =document.getElementById("nom");
        var in2 =document.getElementById("ad");
        var  in3 = document.getElementById("nu");


        if( in1.value=="" && in2.value=="")
        {
            alert("saisir le nom et mail");
           
            
                    in1.focus() ;

            

            
        }
        else if(in1.value=="")
        {
            alert("saisir le nom ");
           
            
                    in1.focus() ;

            

            
        }
       else if(in2.value=="")
        {
            alert("saisir le mail ");
           
            
                    in2.focus() ;

            

            
        }


        if(in3.value=="")
        {
            
            alert("saisir le numero ");
           
            
                    in3.focus() ;

        }




    
    var q1 = document.getElementById("n1").value;
    var q2 = document.getElementById("n2").value;
    var q3 = document.getElementById("n3").value;
    var q4 = document.getElementById("n4").value;

    if ( q1=="" && q2 =="" && q3 =="" && q4=="")
    {
            alert("veuillez inserer  les valeur");



    }
    else{

        if(q1 =="")
        {
            q1=0;
        }
        if(q2 =="")
        {
            q2=0;
        }
        if(q3 =="")
        {
            q3=0;
        }
        if(q4 =="")
        {
            q4=0;
        }
        


    var tot = 80*parseInt(q1)+75*parseInt(q2)+100*parseInt(q3)+120*parseInt(q4);
    if(in3.value!="")
       {
        document.getElementById("res").setAttribute("value",tot);
       }
    

    }


    
    





}