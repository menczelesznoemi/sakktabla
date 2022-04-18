window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}


function $(elem) {
    return document.querySelectorAll(elem);
}

function init(){
	gombok();
	
	
}

var muvjel = "";

function gombok(){
	
	
	var gomb = "";
    for (let i = 0; i < 10; i++) {
        
        gomb += '<button id="'+i+'">'+ i + '</button>';
        
      
    }
    
    document.getElementsByClassName("szamok")[0].innerHTML = gomb;
for (let j=0;j<10;j++){
ID(j).addEventListener("click",kattintas);

function kattintas(){
document.getElementsByClassName("kifejezes")[0].innerHTML += j;
}

}
ID("osszeadas").addEventListener("click",kattintasszamol);
ID("kivonas").addEventListener("click",kattintasszamol);
ID("szorzas").addEventListener("click",kattintasszamol);
ID("osztas").addEventListener("click",kattintasszamol);
ID(".").addEventListener("click",kattintasszamol);
ID("egyenlo").addEventListener("click",szamol);
ID("torles").addEventListener("click",torles);

function kattintasszamol(){
if(document.getElementsByClassName("kifejezes")[0].innerHTML!=""){
muvjel = event.target.innerHTML;
document.getElementsByClassName("kifejezes")[0].innerHTML += muvjel;
console.log(muvjel);

}
}

function torles(){
document.getElementsByClassName("kifejezes")[0].innerHTML = "";
document.getElementsByClassName("eredmeny")[0].innerHTML = "";
muvjel = "";
}
function szamol(){
var szamok = document.getElementsByClassName("kifejezes")[0].innerHTML;
var szam = szamok.split(muvjel);
console.log(szam)
var eredmeny = "";
if(muvjel == "+"){
	eredmeny=parseFloat(szam[0])+parseFloat(szam[1]);
}else if(muvjel == "-"){
eredmeny=parseFloat(szam[0])-parseFloat(szam[1]);
}else if(muvjel == "*"){
eredmeny=parseFloat(szam[0])*parseFloat(szam[1]);
}else{
eredmeny=parseFloat(szam[0])/parseFloat(szam[1]);
}
document.getElementsByClassName("kifejezes")[0].innerHTML = "";
muvjel = "";
document.getElementsByClassName("eredmeny")[0].innerHTML = eredmeny;
}

}
