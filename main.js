const colors = ["red", "green", "rgba(123,564,264)", "rgba(145,163,423)", "blue", "pink", "cyan", "violet", "beige"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor(){
    // console.log(document.body);
    const randomNumber=getRandomNum();
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];
}
function getRandomNum(){
    // console.log(Math.floor(Math.random() * colors.length));
    return Math.floor(Math.random()*colors.length);
}