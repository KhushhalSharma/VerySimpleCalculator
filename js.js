let first=document.getElementById("first").value;
let second=document.getElementById("second").value;
let add=document.getElementById("add");
let sub=document.getElementById("sub");
let mul=document.getElementById("mul");
let div=document.getElementById("div");

add.addEventListener("click",function(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    alert(Number(first)+Number(second))
})


sub.addEventListener("click",function(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    alert(Math.floor(first-second))
})

mul.addEventListener("click",function(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    alert(Math.floor(first*second))
})

div.addEventListener("click",function(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    alert((first/second))
})
