function myfunction(){
    alert("your form are submited")
}

function checklnput(event){
    var input = event.target;
    var regex = /^[a-zA-Z]+$/;
    
     input.value = input.value.replace(/[^a-zA-Z]+/g,"");

     var input = document.getElementById("mylnput");
     if (input.value === ""){
        input.value = "";

     }
     
     
    }

    function Validateinput(event){

        var input = event.target;
        input.value = input.value.replace(/[^0-9]+/g,"").slice(0,10);


    }
