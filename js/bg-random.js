function getColor(id){
    const randomColor = Math.floor(Math.random()*16777215);
    const randomCode = '#' + randomColor.toString(16);
    const random = document.getElementById(id)
    random.style.backgroundColor = randomCode;
    return random;
}

document.getElementById('card').addEventListener('mouseenter',function(){
getColor('triangle-body');  
})

document.getElementById('card-2').addEventListener('mouseenter',function(){
getColor('rectangle-body');  
})

document.getElementById('card-3').addEventListener('mouseenter',function(){
getColor('paralogram-body'); 
})
document.getElementById('card-4').addEventListener('mouseenter',function(){
getColor('rhombus-body'); 
})
document.getElementById('card-5').addEventListener('mouseenter',function(){
getColor('pentagon-body'); 
})
document.getElementById('card-6').addEventListener('mouseenter',function(){
getColor('ellipse-card'); 
})