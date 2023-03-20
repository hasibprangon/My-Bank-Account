document.getElementById('btn-widthdraw').addEventListener('click', function(){
    // console.log('btn clicked');


    const widthdrawField = document.getElementById('withdraw');
    const widthdrawAmmountStr =  widthdrawField.value;
    const  widthdrawAmmount = parseFloat( widthdrawAmmountStr);
    // console.log(widthdrawAmmount)


    const totalWidthdraw = document.getElementById('withdraw-money');
    const totalWidthdrawStr = totalWidthdraw.innerText;
    const totalWidthdrawAmmount = parseFloat(totalWidthdrawStr);


    const currentWidthraw = widthdrawAmmount + totalWidthdrawAmmount;
    totalWidthdraw.innerText = currentWidthraw;
    // widthdrawAmmount = totalWidthdrawAmmount;
    // console.log(totalWidthdrawAmmount);

    widthdrawField.value = '';

    const Balance = document.getElementById('main-balance');
    const mainBalanceStr = Balance.innerText;
    const mainBalance = parseFloat(mainBalanceStr);
    const totalBalance =  mainBalance -  widthdrawAmmount;
    Balance.innerText =  totalBalance;

})