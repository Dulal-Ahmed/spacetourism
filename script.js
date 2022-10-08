//  menu id
let topnav = document.querySelector('#topnav');

let home = document.querySelector('#home');
let destination = document.querySelector('#destination');
let crew = document.querySelector('#crew');
let technology = document.querySelector('#technology');
// sections id 
let home1 = document.querySelector('#home1');
let destination1 = document.querySelector('#destination1');
let crew1 = document.querySelector('#crew1');
let technology1 = document.querySelector('#technology1');

let navallanchor = document.querySelectorAll( '#topnav a');
let sections = document.querySelectorAll( 'main section');
 for(let i =0; i<navallanchor.length; i++){
    navallanchor[i].onclick =()=>{ 
        navallanchor[i].className  += ' border-b-2';
        hiddentab(i); 
    sections[i].style.display = "flex";
    }
 }
 
 function hiddentab(v){
    for(let j=0; j< navallanchor.length; j++){
      if(j != v){
       navallanchor[j].classList.remove('border-b-2');
       sections[j].style.display = "none";
    }
    }
  
 }

//  Destinations Section 

let destinationmenu = document.querySelector('#destinationmenu');
let destinationalldivAnchor = document.querySelectorAll('#destinationmenu a');
let destinatioAlldiv = document.querySelectorAll('.destinationalldiv');

for(let i =0; i<destinationalldivAnchor.length; i++){
   destinationalldivAnchor[i].onclick =()=>{ 
      destinationalldivAnchor[i].className  += ' border-b-2';
       hiddentab2(i); 
   destinatioAlldiv[i].style.display = "flex";
   }
}

function hiddentab2(v){
   for(let j=0; j< destinationalldivAnchor.length; j++){
     if(j != v){
      destinationalldivAnchor[j].classList.remove('border-b-2');
      destinatioAlldiv[j].style.display = "none";
 
   }
   }
 
}

// Crew section 
let crawbottomButtonmenu = document.querySelector('#crawbottomButtonmenu');
let crawbottomButtonmenualldiv = crawbottomButtonmenu.querySelectorAll('#crawbottomButtonmenu  div');
let crawalldiv = document.querySelectorAll('.crawalldiv');

for(let i =0; i<crawbottomButtonmenualldiv.length; i++){
   crawbottomButtonmenualldiv[i].onclick =()=>{ 
      crawbottomButtonmenualldiv[i].classList.replace('bg-gray-800','bg-gray-50');
      crawalldiv[i].classList.replace('hidden','flex');
       hiddentab3(i); 
   }
}

function hiddentab3(k){
   for(let j=0; j< crawbottomButtonmenualldiv.length; j++){
     if(j != k){
      crawbottomButtonmenualldiv[j].classList.replace('bg-gray-50','bg-gray-800');
      crawalldiv[j].classList.replace('flex','hidden');  
   }
   }
}

//  technology section ---------------
let technologybuttonmenu = document.querySelectorAll('#technologybuttonmenu div');
let technologyAlldiv = document.querySelectorAll('.technologyAlldiv');

for(let i =0; i<technologybuttonmenu.length; i++){
   technologybuttonmenu[i].onclick =()=>{ 
      technologybuttonmenu[i].classList.add('bg-gray-50');
      technologybuttonmenu[i].classList.replace('text-gray-300','text-gray-900');
      technologyAlldiv[i].classList.replace('hidden','flex');
       hiddentab4(i); 
   }
}

function hiddentab4(k){
   for(let j=0; j< technologybuttonmenu.length; j++){
     if(j != k){
      technologybuttonmenu[j].classList.remove('bg-gray-50');
      technologybuttonmenu[j].classList.replace('text-gray-900','text-gray-300');
      technologyAlldiv[j].classList.replace('flex','hidden');  
   }
   }
}

let crossX = document.querySelector('#crossX');
let triline = document.querySelector('#triline');

crossX.onclick = ()=>{
   topnav.style.display = "none";
}
triline.onclick = ()=>{
   topnav.style.display = "flex";
}
 //  topnav