// .checked = property that determines the checked state of an HTML 
//              checked or radio button element


const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const myPay = document.getElementById("myPay");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mypay.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = "You are subscribed.";
    }
    else{
        subResult.textContent = "You are not subscribed.";
    }

    if(visaBtn.checked){
        payResult.textContent = "You are paying with Visa.";
    }
    else if(masterCardBtn.checked){
        payResult.textContent = "You are paying with Master-card."
    }
    else if(payPalBtn.checked){
        payResult.textContent = "You are paying with PayPal.";
    }
    else{
        payResult.textContent = "You must select a payment type.";
    }
}