function getAllInputValue(input){
    const getInput=document.getElementById(input);
    const getInputString=getInput.value;
    const getInputNumber=parseFloat(getInputString);
    return getInputNumber;
}
function getAllText(text){
    const getText=document.getElementById(text);
    const getTextString=getText.innerText;
    const getTextNumber=parseFloat(getTextString);
    return getTextNumber;
}
function setValue(text,value){
    document.getElementById(text).innerText=value;
}

document.getElementById('calculateBtn').addEventListener('click',function(){
    const getIncome=getAllInputValue('getIncome');
    const getFood=getAllInputValue('foodCost');
    const getRent=getAllInputValue('rentCost');
    const getClothes=getAllInputValue('clothesCost');

    if(isNaN(getIncome)||isNaN(getFood)|| isNaN(getRent)|| isNaN(getClothes)){
        alert('Please Enter A valid Number');
        return;
    }

    const sumAllCost=getFood+ getRent+ getClothes;
    setValue('totalCost',sumAllCost);

    const sumBalance= getIncome-sumAllCost;
    setValue('totalBalance',sumBalance);
    
})
document.getElementById('saveBtn').addEventListener('click',function(){
    const getTextValue=getAllInputValue('saveField');
    const getIncome=getAllInputValue('getIncome');

    if(isNaN(getTextValue)){
        alert('Enter Number');
        return
    }

    const minusTheSaveAmount=getIncome * getTextValue/100;
    setValue("SaveAmount",minusTheSaveAmount);

    const getBalance= getAllText('totalBalance');
    const remainingBalance= getBalance-minusTheSaveAmount;

    setValue('remaining',remainingBalance);


    
})