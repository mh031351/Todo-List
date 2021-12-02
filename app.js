
 var card =document.getElementById("card")
    
 function openRegister(){
     card.style.transform = "rotateY(-180dge)";
 }
 
 function openLogin(){
     card.style.transform = "rotateY(0dge)";
 }


 function showPass(e){

     var passInput= document.getElementById("passInput");

       
         if(e.className === "far fa-eye-slash"){
           e.className =  "far fa-eye" 
            passInput.type = "text" 
     }else{
            e.className = "far fa-eye"
       passInput.type = "password  " 
       dispatchEvent
    
         }
     }
    
