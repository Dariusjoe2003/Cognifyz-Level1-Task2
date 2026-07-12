function changeColor(){

    let button=document.getElementById("colorBtn");

    if(button.style.background=="red"){
        button.style.background="blue";
    }
    else{
        button.style.background="red";
    }

}

function greetUser(){

    let hour=new Date().getHours();

    if(hour<12){
        alert("Good Morning!");
    }
    else if(hour<18){
        alert("Good Afternoon!");
    }
    else{
        alert("Good Evening!");
    }

}

function addNumbers(){

    let n1=Number(document.getElementById("num1").value);

    let n2=Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML="Sum = "+(n1+n2);

}