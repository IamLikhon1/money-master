document.getElementById('submitBtn').addEventListener('click',function(){
    const getInputEmail=document.getElementById('email').value;
    const getInputPassword=document.getElementById('password').value;
    email.value='';
    password.value='';

    if(getInputEmail=="likhon"&&getInputPassword==123){
        window.location.href="index.html"
    }
    else{
        alert('Please Enter a Valid Information')
    }
})