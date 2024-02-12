const cuadrado1_1 = document.querySelector('.cuadrado1-1');

cuadrado1_1.addEventListener('mouseover', () => {
    const color = getRandomColor();
    cuadrado1_1.style.backgroundColor = color;
});

cuadrado1_1.addEventListener('mouseout', () => {
    cuadrado1_1.style.backgroundColor = 'lightblue'; 
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const cuadrado1_2 = document.querySelector('.cuadrado1-2'); 
const imagen2 = document.getElementById('img1');

cuadrado1_2.addEventListener('mouseover', () => {
   imagen2.classList.toggle('mostrar');
});
cuadrado1_2.addEventListener('mouseout',()=>{
   imagen2.classList.toggle('mostrar');
})

const cuadrado1_3 = document.querySelector('.cuadrado1-3');
const txt1_3 = document.getElementById('txt1-3');

cuadrado1_3.addEventListener('mouseover', () => {
    txt1_3.innerHTML = 'texto cambiado';
});

cuadrado1_3.addEventListener('mouseout', () => {
    txt1_3.innerHTML = 'hola que tal';
});



    

//eventos click:
//mensaje por cosole log
const btn2_1 = document.getElementById("btn2-1");
btn2_1.addEventListener("click",()=>{
    console.log("haz hechi click");
});

//cambiar color de un div
const btn2_2 = document.getElementById("btn2-2");
const cuadrado2_2 = document.querySelector(".cuadrado2-2");

btn2_2.addEventListener("click", () => {
    console.log("has hecho click en el botón");
    cuadrado2_2.style.backgroundColor = "#09F793"; 
});

//mensaje alert
const btn2_3 = document.getElementById("btn2-3");
btn2_3.addEventListener("click", () => {
    alert("haz dado click.");
});



// evento focus

//focus en input
const input3_1 = document.getElementById("input3-1");

input3_1.addEventListener("focus", () => {
    console.log("El foco se ha obtenido");
});

//focus input
const input3_2 = document.getElementById("input3-2");
const txt3_3 = document.getElementById("txt3-3");

input3_2.addEventListener("focus", () => {
    txt3_3.innerHTML = "input esta enfocado";
});

input3_2.addEventListener("blur", () => {
    
    txt3_3.innerHTML = "hola";
});

//focus en div
const cuadrado3_3 = document.querySelector(".cuadrado3-3");

cuadrado3_3.addEventListener("focus", () => {
    
    cuadrado3_3.style.backgroundColor = "white"}); 


cuadrado3_3.addEventListener("blur", () => {
    
    cuadrado3_3.style.backgroundColor = ""; 
});




