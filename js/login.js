document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if(email === 'hasibulhossainp09@gmail.com' && pass ==='15101999(hhp)'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})