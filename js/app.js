/* To handle sring inputs I used Number Input Fields to take input from user, so that user can't set any string as input.
*/

// collect the inputs and verify the inputs
function getInput(id){
    const inputField =  document.getElementById(id);
    //check if input is given or not
    if((inputField.value).length == 0){
        //if any of the input field is empty then there willbe input is empty error
        document.getElementById(id + "-error").innerText = "Input is Empty";
        //if there is any empty input then there will be no result in the outputs
        document.getElementById("total-expenses").innerText  ="";
        document.getElementById("balance").innerText  = "";
        document.getElementById("total-saving").innerText  = "";
        document.getElementById("remaining-amount").innerText  = "";
        //if there is any empty input the only the empty input error will appear, other errors will be hidden.
        document.getElementById("balance-expenses-error").style.display="none";
        document.getElementById("saving-remaining-error").style.display="none";

        //if saving input is empty, only the saving part will show empty input error, other parts will execute normally
        if(id=="saving-amount"){
            document.getElementById("total-expenses").innerText  =calculateExpenses();
            document.getElementById("balance").innerText  = calCulateBalance();
        }
        return;
    }
    else{
        const inputAmount = parseFloat(inputField.value);
        if(inputAmount>=0){
            /*if all inputs are given and the inputs are greater than 0 and there is no negetive numbers then there will be no errors*/
            document.getElementById(id + "-error").innerText = "";
            return inputAmount;
        }
        else{
            /*If there is any negetive inputs then there will be an error*/
            document.getElementById(id + "-error").innerText = "Negetive Number Not Accepted";
            return;
        }
    }
    
};

//calculate income
function calculateIncome() {
    const incomeAmount = getInput("income");
    return incomeAmount;   
};
//calculate expense
function calculateExpenses(){
    const foodAmount = getInput("food");
    const rentAmount = getInput("rent");
    const clothesAmount = getInput("clothes");
    const totalExpense = foodAmount+rentAmount+clothesAmount;
    return totalExpense;
};

//calculate balance
function calCulateBalance(){
    const balance = calculateIncome() - calculateExpenses();
    return balance;
};
// calculate saving amount
function calculateSaving(){
    const savingAmount = getInput("saving-amount");
    const savedAmount = (calculateIncome()/100)*savingAmount;
    return savedAmount;
};
//calculate remaining amount after saving
function calculateRemaining(){
    const remaining =  calculateIncome() - (calculateExpenses()+calculateSaving());
    return remaining;
};

//calculate button event
document.getElementById("calculate-button").addEventListener("click", function(){
    const expenses = calculateExpenses();
    const income = calculateIncome();
    const balance = calCulateBalance();

    //if expenses in smaller or equal to income then the expense and balance will show
    if(expenses<=income){
        document.getElementById("total-expenses").innerText  = expenses;
        document.getElementById("balance").innerText  = balance;
        document.getElementById("balance-expenses-error").innerText  = "";
    }
    // if expense is greater than the income then there will be an error
    else{
        document.getElementById("balance-expenses-error").innerText  = "Error: Expense Can't be Greater Than Income";
    }     

});
//save button event
document.getElementById("saving").addEventListener("click", function(){
    const saving = calculateSaving();
    const balance = calCulateBalance();
    const remaining = calculateRemaining();
    const expenses = calculateExpenses();
    
    //if saving is smaller or equal to balance then the saving amount and remaining balance will show
    if(saving<=balance){
        document.getElementById("total-expenses").innerText  = expenses;
        document.getElementById("balance").innerText  = balance;
        document.getElementById("total-saving").innerText  = saving;
        document.getElementById("remaining-amount").innerText  = remaining;
        document.getElementById("saving-remaining-error").innerText  = "";
    }
    //if saving is greater than the balance then there will be an error
    else{  
           document.getElementById("saving-remaining-error").innerText  = "Error: Saving Can't Be Greater Than Balance"
    }    
});
