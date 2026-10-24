const formPassword = document.querySelector('.form-magic')
const formEye = document.querySelector('.form-nofire')
const form = document.querySelector('.form-login')
const formName = document.querySelector('.form-anatolii')
let counter = 1
let myWord = 'anatolii'
let myCode = 'magic'

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (formName.value === myWord && formPassword.value === myCode) {
        alert('Двері відчинено');
        window.location.href = './treasure.html';
    } else {
        alert('Не вірне заклинання! Портал заблоковано');
    }
});

formEye.addEventListener('click',function(){
    counter++
    if (counter%2==0) {
        formPassword.setAttribute('type','text')
        formEye.setAttribute('src','./fire.png')
    } else{
        formPassword.setAttribute('type','password')
        formEye.setAttribute('src','./nofire.png')
    }
}) 


