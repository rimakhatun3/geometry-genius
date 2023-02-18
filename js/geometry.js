function getInputById(id){
    const inputElement = document.getElementById(id);
    const inputSting = inputElement.value;
    const inputValue = parseFloat(inputSting);
   inputElement.value = '';


   if(inputSting==null || inputSting==''){
    alert('input fileld mustbe filled out')
    return false
   }

   if(isNaN(inputSting)){
    alert('please type a number')
    return false
   }
   return inputValue;
  
}

document.getElementById('nav-btn').addEventListener('click',function(){
    window.location.href ='page.html'
})
 



let serial = 0;
document.getElementById('btn-triangle').addEventListener('click',function(){
    serial += 1
    const triangle = document.getElementById('triangle').innerText;
    const firstTriangleInput = getInputById('first-input-triangle');
    const sceondTriangleInput = getInputById('sceond-input-triangle');
    const total =  0.5*firstTriangleInput * sceondTriangleInput;
    const triangleBody = document.getElementById('triangle-body');
    triangleBody.style.backgroundColor = ' #faf55' + 'randomColor'
   getData(triangle,total);
  



})


document.getElementById('btn-rectangle').addEventListener('click',function(){
    serial += 1
    const rectangText = document.getElementById('rectangle-text').innerText;
    const firstRectangleInput = getInputById('first-rectangle-input');
    const sceondRectangleInput = getInputById('sceond-rectangle-input');
    const total =  firstRectangleInput * sceondRectangleInput;

   getData(rectangText,total);
  
})
document.getElementById('btn-paralogram').addEventListener('click',function(){
    serial += 1
    const paraloText = document.getElementById('paralo-text').innerText;
    const firstParaloInput = getInputById('first-paralo-input');
    const sceondParaloInput = getInputById('sceond-paralo-input');
    const total =  firstParaloInput * sceondParaloInput;

   getData(paraloText,total);
  
})
document.getElementById('btn-rhombus').addEventListener('click',function(){
    serial += 1
    const rhombusText = document.getElementById('rhombus-text').innerText;
    const firstRhombusInput = getInputById('first-rhombus-input');
    const sceondRhombusInput = getInputById('sceond-rhombus-input');
    const total =  0.5*firstRhombusInput* sceondRhombusInput;

   getData(rhombusText,total);
  
})
document.getElementById('btn-pentagon').addEventListener('click',function(){
    serial += 1
    const pentagonText = document.getElementById('pentagon-text').innerText;
    const firstPentagonInput = getInputById('first-pentagon-input');
    const sceondPentagonInput = getInputById('sceond-pentagon-input');
    const total =  0.5*firstPentagonInput* sceondPentagonInput;

   getData(pentagonText,total);
  
})
document.getElementById('btn-ellipse').addEventListener('click',function(){
    serial += 1
    const ellipseText = document.getElementById('ellipse-text').innerText;
    const firstEllipseInput = getInputById('first-ellipse-input');
    const sceondEllipseInput = getInputById('sceon-ellipse-input');
    const total =  3.14*firstEllipseInput* sceondEllipseInput;

   getData(ellipseText,parseFloat(total.toFixed(2)));
   console.log(typeof total);
  
})


function getData(productName,total){
    const container = document.getElementById('table-container');
//     const btn = document.createElement("button");
// btn.innerHTML = "convert to m2";

const tr = document.createElement('tr');
tr.innerHTML =`<td>${serial}</td>
<td>${productName}</td>
<td>${total}cm <sup>2</sup></td>
<td><button id="convert" class="px-8 py-2 bg-blue-600 ">Convert To m<sup>2</sup></button></td>
`;
container.appendChild(tr);


}