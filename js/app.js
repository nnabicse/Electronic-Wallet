function calculateIncome() {
    const incomeField =  document.getElementById("income");
    const incomeAmount = parseInt(incomeField.value);
    return incomeAmount;   
}

function calculateExpenses(){
    const foodField = document.getElementById("food");
    const foodAmount = parseInt(foodField.value);
    const rentField = document.getElementById("rent");
    const rentAmount = parseInt(rentField.value);
    const clothesField = document.getElementById("clothes");
    const clothesAmount = parseInt(clothesField.value);
    const totalExpense = foodAmount+rentAmount+clothesAmount;
    return totalExpense;
}


function calCulateBalance(){
    const balance = calculateIncome() - calculateExpenses();
    return balance;
}

function calculateSaving(){
    const savingField = document.getElementById("saving-amount");
    const savingAmount = parseInt(savingField.value);
    const savedAmount = (calculateIncome()/100)*savingAmount;
    return savedAmount;
}

function calculateRemaining(){
    const remaining =  calculateIncome() - (calculateExpenses()+calculateSaving());
    return remaining;
}






document.getElementById("calculate-button").addEventListener("click", function(){

    document.getElementById("total-expenses").innerText  = document.getElementById("total-expenses").innerText + calculateExpenses();
    
    document.getElementById("balance").innerText  = document.getElementById("balance").innerText + calCulateBalance();

})

document.getElementById("saving").addEventListener("click", function(){
    document.getElementById("total-saving").innerText  = document.getElementById("total-saving").innerText + calculateSaving();

    document.getElementById("remaining-amount").innerText  = document.getElementById("remaining-amount").innerText + calculateRemaining();
    



})
