const test=document.querySelector('.test');
test.innerHTML='Nie wiem co mam napisać, bo to tylko test'

const firstName="Ewa"
const lastName="Mitra"

function greet (firstName, lastName) {
    console.log (`Witam Cię serdecznie, ${firstName} ${lastName}!Cieszę się, że jesteś`)
}

greet(firstName, lastName);

const hamburger=document.querySelector('.hamburger--js');
hamburger.addEventListener('click', ()=>{
    const nav =document.querySelector('.common-header__navigation--js');
    nav.classList.toggle('common-header__navigation--open')
});