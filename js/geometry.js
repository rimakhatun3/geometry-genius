function getInputById(id){
    const triangleInputElement = document.getElementById(id);
    const triangleInputSting = triangleInputElement.value;
    const triangleInput = parseFloat(triangleInputSting);
   triangleInputElement.value = '';
   return triangleInput;
}


let serial = 0;
document.getElementById('btn-triangle').addEventListener('click',function(){
    serial += 1
    const triangle = document.getElementById('triangle').innerText;
    const firstTriangleInput = getInputById('first-input-triangle');
    const sceondTriangleInput = getInputById('sceond-input-triangle');
    const total =  0.5*firstTriangleInput * sceondTriangleInput;
   getData(triangle,total);
  



})


document.getElementById('btn-rectangle').addEventListener('click',function(){
    serial += 1
    const rectangText = document.getElementById('rectangle-text').innerText;
    const firstRectangleInput = getInputById('first-rectangle-input');
    const sceondRectangleInput = getInputById('sceond-rectangle-input');
const btn = document.getElementById('convert');
    const total =  firstRectangleInput * sceondRectangleInput;

   getData(rectangText,total,btn);
  
})


function getData(productName,total,bt){
    const container = document.getElementById('table-container');
//     const btn = document.createElement("button");
// btn.innerHTML = "convert to m2";

const tr = document.createElement('tr');
tr.innerHTML =`<td>${serial}</td>
<td>${productName}</td>
<td>${total}</td>
<td>${bt}</td>
`;
container.appendChild(tr);


}