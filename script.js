"use strict"

const card = document.querySelector('.card');
let mouse = document.querySelector('.mouse');
const input = document.querySelector('input');
const outer = document.querySelector('.outer')
const wrapper = document.querySelector('.wrapper');
const select = document.querySelector('#select')



// card.onclick=function(){
//     card.style.backgroundColor='red'
// }


// card.addEventListener('mousedown',function(e){

//     console.log(e.target);
//     e.target.style.backgroundColor='red'

// })

// card.addEventListener('mouseup',function(e){

//     console.log(e.target);
//     e.target.style.backgroundColor='yellow'



// window.addEventListener('mousemove', function(e){
//    const x=e.clientX;
//    const y=e.clientY;

//    mouse.style.cssText=`transform:translate(${x}px,${y}px)`
// })

// input.addEventListener('focus',function(e){
//    console.log(e.target.value);
//    input.style.border="2px solid green"


// })



function dynamicElements(data) {

  data.forEach( (e)=> {

    const div = document.createElement('div');
    div.setAttribute('class', 'card')



    div.innerHTML = `<div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
      
    <img src="${e.picture}" class="img-fluid"/>
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">${e.name}</h5>
    <ul class="list-unstyled ">
      <li>RAM: ${e.RAM}</li>
      <li>ROM: ${e.ROM}</li>
      <li>Chipset: ${e.chipset}</li>
      <li>ReleasedDate: ${e.releasedDate}</li>
     
    </ul>
    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
  </div>`;

    wrapper.append(div)
  })

  
}

dynamicElements(phones);

const category = [];

function dynamicOption() {

  phones.forEach((e)=>{
    if (!category.includes(e.category)) {
      category.push(e.category)

      const option = document.createElement('option');
      option.textContent = e.category;

      select.append(option)
      
    }
  })
}


dynamicOption()


select.addEventListener('change', (e)=>{
  wrapper.innerHTML="";
  const filterProduct=phones.filter((el)=> el.category.toLowerCase() === e.target.value.toLowerCase())
  dynamicElements(filterProduct);
    
})





// let arr=[1,2,3,4,5,6,7,8,9,10];

// const db=arr.forEach((element, index, arr)=>{
//   if(element%2==0){
//     console.log(element);
//   }
// })

// console.log(db);


// let arr=[1,2,3,4,5,6,7,8,9,10];

// arr.map((element, index, arr)=>{
//     if(element%2==0){
//       console.log(element);
//     }
 
// })

// console.log(db);