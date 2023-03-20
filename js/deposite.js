document.getElementById('btn-deposite').addEventListener('click', function(){
   
    const dipositeField = document.getElementById('deposite')
    const newDipositeStr = dipositeField.value;
   const newDiposite = parseFloat(newDipositeStr);

    const depositeTotal = document.getElementById('add-money');
    const pre_depositeStr = depositeTotal.innerText;
    const pre_deposite = parseFloat(pre_depositeStr);

    const currentDipositeTotal = pre_deposite + newDiposite ;
    depositeTotal.innerText = currentDipositeTotal;
    


    dipositeField.value = '';

    const Balance = document.getElementById('main-balance');
    const mainBalanceStr = Balance.innerText;
    const mainBalance = parseFloat(mainBalanceStr);
    const totalBalance = newDiposite + mainBalance;
    Balance.innerText =  totalBalance;
})