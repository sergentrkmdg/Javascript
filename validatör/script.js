const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');

function error(input,message) {
    input.className='form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}
function success(input) {
    input.className='form-control is-valid';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkLength(input,min,max) {
    if(input.value.length < min) {
        error(input,`${input.id} en az ${min} karakter olmalıdr`);
    }else if (input.value.length>max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır`);
    }else { 
        success(input);
    }
}

function checkPasswords(input1,input2){
    if (input1.value!==input2.value){
        error(input2,'Paralolar eşleşmemektedir');
    }
}


form.addEventListener('submit',function(e){

    e.preventDefault();
  
    if(username.value===''){
      error(username,'username gereklidir');
    }

    
    else {
        success(username)
    }

    if(email.value===''){
        error(email,'email gereklidir');
    }
    else if (!validateEmail(email.value)) {
       error(email, 'doğru bir mail adresi giriniz');
            }
        
    else{
        success(email);
    }

    if(password.value===''){
        error(password,'password gereklidir');
    }
    else{
        success(password)
    }

    if(repassword.value===''){
        error(repassword,'repassword gereklidir');
    }
    else{
        success(repassword);
    }
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
});
