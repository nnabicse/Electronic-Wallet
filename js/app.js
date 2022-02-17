function getInput(id){
    const inputField =  document.getElementById(id);
    if((inputField.value).length == 0){
        document.getElementById(id + "-error").innerText = "Input is Empty";
        document.getElementById("total-expenses").innerText  ="";
        document.getElementById("balance").innerText  = "";
        document.getElementById("total-saving").innerText  = "";
        document.getElementById("remaining-amount").innerText  = "";
        document.getElementById("balance-expenses-error").style.display="none";
        document.getElementById("saving-remaining-error").style.display="none";

        if(id=="saving-amount"){
            document.getElementById("total-expenses").innerText  =calculateExpenses();
            document.getElementById("balance").innerText  = calCulateBalance();
        }
        return;
    }
    else{
        const inputAmount = parseFloat(inputField.value);
        if(inputAmount>=0){
            document.getElementById(id + "-error").innerText = "";
            return inputAmount;
        }
        else{
            document.getElementById(id + "-error").innerText = "Negetive Number Not Accepted";
            return;
        }
    }
    
}

function calculateIncome() {
    const incomeAmount = getInput("income");
    return incomeAmount;   
}

function calculateExpenses(){
    const foodAmount = getInput("food");
    const rentAmount = getInput("rent");
    const clothesAmount = getInput("clothes");
    const totalExpense = foodAmount+rentAmount+clothesAmount;
    return totalExpense;
}


function calCulateBalance(){
    const balance = calculateIncome() - calculateExpenses();
    return balance;
}

function calculateSaving(){

    const savingAmount = getInput("saving-amount");
    const savedAmount = (calculateIncome()/100)*savingAmount;
    return savedAmount;
}

function calculateRemaining(){
    const remaining =  calculateIncome() - (calculateExpenses()+calculateSaving());
    return remaining;
}

document.getElementById("calculate-button").addEventListener("click", function(){
    const expenses = calculateExpenses();
    const income = calculateIncome();
    const balance = calCulateBalance();

    if(expenses<=income){
        document.getElementById("total-expenses").innerText  = expenses;
        document.getElementById("balance").innerText  = balance;
        document.getElementById("balance-expenses-error").innerText  = "";
    }
    else{
        document.getElementById("balance-expenses-error").innerText  = "Error: Expense Can't be Greater Than Income";
    }     

})

document.getElementById("saving").addEventListener("click", function(){
    const saving = calculateSaving();
    const balance = calCulateBalance();
    const remaining = calculateRemaining();
    const expenses = calculateExpenses();
    const income = calculateIncome();
    
    if(saving<=balance){
        document.getElementById("total-expenses").innerText  = expenses;
        document.getElementById("balance").innerText  = balance;
        document.getElementById("total-saving").innerText  = saving;
        document.getElementById("remaining-amount").innerText  = remaining;
        document.getElementById("saving-remaining-error").innerText  = "";
    }
    else{  
           document.getElementById("saving-remaining-error").innerText  = "Error: Saving Can't Be Greater Than Balance"
    }    
})
