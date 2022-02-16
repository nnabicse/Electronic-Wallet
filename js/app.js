document.getElementById("calculate-button").addEventListener("click", function(){
    const incomeField =  document.getElementById("income");
    const incomeAmount = parseInt(incomeField.value);
    const foodField = document.getElementById("food");
    const foodAmount = parseInt(foodField.value);
    const rentField = document.getElementById("rent");
    const rentAmount = parseInt(rentField.value);
    const clothesField = document.getElementById("clothes");
    const clothesAmount = parseInt(clothesField.value);

    const totalExpense = foodAmount+rentAmount+clothesAmount;
    const balance = incomeAmount - totalExpense;

    document.getElementById("total-expenses").innerText  = document.getElementById("total-expenses").innerText + totalExpense;
    
    document.getElementById("balance").innerText  = document.getElementById("balance").innerText + balance;

    return totalExpense;

})

document.getElementById("saving").addEventListener("click", function(){
    const savingField = document.getElementById("saving-amount");
    const savingAmount = parseInt(savingField.value);
    const incomeField =  document.getElementById("income");
    const incomeAmount = parseInt(incomeField.value);
    const foodField = document.getElementById("food");
    const foodAmount = parseInt(foodField.value);
    const rentField = document.getElementById("rent");
    const rentAmount = parseInt(rentField.value);
    const clothesField = document.getElementById("clothes");
    const clothesAmount = parseInt(clothesField.value);

    const totalExpense = foodAmount+rentAmount+clothesAmount;

    const savedAmount = (incomeAmount/100)*savingAmount;
    const remainingAmount = incomeAmount - (totalExpense+savedAmount);
    document.getElementById("total-saving").innerText  = document.getElementById("total-saving").innerText + savedAmount;

    document.getElementById("remaining-amount").innerText  = document.getElementById("remaining-amount").innerText + remainingAmount;
    



})
