// -----------------------------
// Reusable Functions
// -----------------------------

// Get input value as number
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputValueNumber = parseInt(inputFieldValue);
    return inputValueNumber;
}

// Get input value as string
function getInputValueString(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// Get innerText as number
function getInputValueInnerText(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.innerText;
    const inputValueNumber = parseInt(inputFieldValue);
    return inputValueNumber;
}

// Set balance as innerText
function setInnerText(value){
    const availableBalanceEl = document.getElementById("balance");
    availableBalanceEl.innerText = value;
    return availableBalanceEl;
}

// -----------------------------
// Transaction History Setup
// -----------------------------
const transactions = []; // store all transactions here

// Function to log a transaction
function addTransaction(type, amount, details = "") {
    const date = new Date().toLocaleString(); // current time
    const transaction = { type, amount, details, date };
    transactions.unshift(transaction); // newest first
    renderTransactions();
}

// ----------------------
// Render Transactions
// ----------------------
function renderTransactions() {
    // Correctly targets the container div, not the button.
    const historyContainer = document.getElementById("transactionHistoryBtn");
    historyContainer.innerHTML = ""; // Clear old logs

    if (transactions.length === 0) {
        historyContainer.innerHTML = `<p class="text-gray-500">No transactions yet.</p>`;
        return;
    }

    transactions.forEach(tx => {
        const transactionElement = document.createElement("div");
        transactionElement.classList.add("border-b", "py-2", "flex", "justify-between", "items-center");

        // Formats the transaction object into a readable string.
        transactionElement.innerHTML = `
            <div class="flex items-center gap-4">
            <div>
                <img class="h-10 w-10" src="./assets/wallet1.png" alt="transaction icon">
            </div>
            <div>
                <p class="font-semibold">${tx.type}</p>
                <p class="text-sm text-gray-500">${tx.details}</p>
            </div>
        </div>
        <div class="text-right">
            <p class="font-bold text-lg ${tx.type === 'Add Money' || tx.type === 'Bonus' ? 'text-green-500' : 'text-red-500'}">
            ${tx.type === 'Add Money' || tx.type === 'Bonus' ? '+' : '-'}$${tx.amount.toFixed(2)}
        </p>
        <p class="text-sm text-gray-500">${tx.date}</p>
        </div>
    `;
    historyContainer.appendChild(transactionElement);
});
}

// Initial render
// renderTransactions();

// -----------------------------
// Pay Bill Feature
// -----------------------------
document.getElementById("payBillBtn").addEventListener("click", function(e){
    e.preventDefault();

    const billerAcc = getInputValueString("billerAccount");
    const payAmount = getInputValueNumber("payAmount");
    const payPin = getInputValueNumber("payPin");
    const balance = getInputValueInnerText("balance");

    if(billerAcc.length < 5){
        alert("Invalid biller account.");
        return;
    }
    if(payPin !== 1234){
        alert("Incorrect PIN.");
        return;
    }
    if(payAmount > balance || payAmount <= 0){
        alert("Invalid bill amount.");
        return;
    }

    const balanceNow = balance - payAmount;
    setInnerText(balanceNow);

    alert(`Successfully paid $${payAmount} to biller ${billerAcc}. New Balance: $${balanceNow}`);

    // Add to transaction history
    addTransaction("Pay Bill", payAmount, `Biller: ${billerAcc}`);
});

// -----------------------------
// Get Bonus Feature
// -----------------------------
document.getElementById("getBonusBtn").addEventListener("click", function(e){
    e.preventDefault();

    const coupon = getInputValueString("bonusCoupon");
    const balance = getInputValueInnerText("balance");
    const bonusAmount = 100; // fixed bonus for demo

    const newBalance = balance + bonusAmount;
    setInnerText(newBalance);

    alert(`Bonus of $${bonusAmount} added to your account!`);

    // Add to transaction history
    addTransaction("Bonus", bonusAmount, `Coupon: ${coupon}`);
});

// -----------------------------
// Transfer Money Feature
// -----------------------------
document.getElementById("transferBtn").addEventListener("click", function(e){
    e.preventDefault();

    const userAcc = getInputValueString("userAccount");
    const transferAmount = getInputValueNumber("transferAmount");
    const transferPin = getInputValueNumber("transferPin");
    const balance = getInputValueInnerText("balance");

    if(userAcc.length < 11){
        alert("User account must be at least 11 digits.");
        return;
    }
    if(transferPin !== 1234){
        alert("Incorrect PIN.");
        return;
    }
    if(transferAmount > balance || transferAmount <= 0){
        alert("Invalid transfer amount.");
        return;
    }

    const balanceNow = balance - transferAmount;
    setInnerText(balanceNow);

    alert(`Successfully transferred $${transferAmount} to ${userAcc}. New Balance: $${balanceNow}`);

    // Add to transaction history
    addTransaction("Transfer Money", transferAmount, `To: ${userAcc}`);
});


// -----------------------------
// Add Money Feature
// -----------------------------
document.getElementById("addMoneyBtn").addEventListener("click", function(event){
    event.preventDefault();         // Prevent form submission

    const fixedPin = 1234;         // Fixed PIN for validation
    const bank = getInputValueString("bank");
    const accountNum = getInputValueString("accountNo");
    const amount = getInputValueNumber("amount");
    const pin = getInputValueNumber("pin");
    const balance = getInputValueInnerText("balance");

    if(accountNum.length < 11){
        alert("Account number must be at least 11 digits.");
        return;
    }
    if(pin !== fixedPin){
        alert("Incorrect PIN. Please try again.");
        return;
    }

    const totalBalance = balance + amount;
    setInnerText(totalBalance);

    alert(`Successfully added $${amount} to your account. New Balance: $${totalBalance}`);

    addTransaction("Add Money", amount, `From Bank: ${bank}`);

    // console.log(Bank: ${bank}, Account Number: ${accountNum}, Amount: ${amount}, PIN: ${pin}, Total Balance: ${totalBalance}); });
});

// -----------------------------
// Cash Out Feature
// -----------------------------
document.getElementById("cashOutBtn").addEventListener("click", function(e){
    e.preventDefault();

    const agentNum = getInputValueString("agent"); 
    const balance = getInputValueInnerText("balance");
    const cashOutAmount = getInputValueNumber("cashOutAmount");
    const cashOutPin = getInputValueNumber("cashOutPin");

    if(agentNum.length < 11){
        alert("Agent number must be at least 11 digits.");
        return;
    }
    if(cashOutPin !== 1234){
        alert("Incorrect PIN. Please try again.");
        return;
    }
    if(cashOutAmount > balance || cashOutAmount <= 0){
        alert("Invalid cash out amount.");
        return;
    }

    const balanceNow = balance - cashOutAmount;
    setInnerText(balanceNow);

    alert(`Successfully withdrew $${cashOutAmount}. New Balance: $${balanceNow}`);

    addTransaction("Cash Out", cashOutAmount, `Agent: ${agentNum}`);

});

// -----------------------------
// Updated Toggle Section Feature
// -----------------------------

// universal function to show only one section
function showSection(sectionClass){
    const allSections = document.getElementsByClassName("payooShow");

    // hide all sections
    for (const sec of allSections) {
        sec.style.display = "none";
    }

    // show the one we want
    document.querySelector(sectionClass).style.display = "block";
}

// Add Event Listeners for each button
document.getElementById("addMoney").addEventListener("click", function(){
    showSection(".addMoneyParent");
});

document.getElementById("sendMoney").addEventListener("click", function(){
    showSection(".cashOutParent");
});

document.getElementById("transferMoney").addEventListener("click", function(){
    showSection(".transferMoneyParent");
});

document.getElementById("getBonus").addEventListener("click", function(){
    showSection(".getBonusParent");
});

document.getElementById("payBills").addEventListener("click", function(){
    showSection(".payBillParent");
});

document.getElementById("transactionHistory").addEventListener("click", function(){
    showSection(".transactionParent");
    renderTransactions(); // always refresh when showing
});



// -----------------------------
// Old Toggle Code - Do not use
// -----------------------------
// document.getElementById("addMoney").addEventListener("click", function(){
//     const payooShowEl = document.getElementsByClassName("payooShow");
//     // hide all first
//     for (const el of payooShowEl) {
//         el.style.display = "none";
//     }
//     // show only Add Money
//     document.querySelector(".addMoneyParent").style.display = "block";
//     document.querySelector(".transferMoneyParent").style.display = "none";
//     document.querySelector(".cashOutParent").style.display = "none";
// });

// document.getElementById("sendMoney").addEventListener("click", function(){ 
//     const payooShowEl = document.getElementsByClassName("payooShow"); for (const el of payooShowEl) { 
//         el.style.display = "none"; } 
        
        // show only Send Money 
        // document.querySelector(".cashOutParent").style.display = "block"; 
        // document.querySelector(".addMoneyParent").style.display = "none";    
        // document.querySelector(".transferMoneyParent").style.display = "none"; 
// });

// document.getElementById("transferMoney").addEventListener("click", function(){ 
//     const payooShowEl = document.getElementsByClassName("payooShow"); for (const el of payooShowEl) { 
//         el.style.display = "none"; }
//     // show only Transfer Money
//     document.querySelector(".transferMoneyParent").style.display = "block";
//     // document.querySelector(".addMoneyParent").style.display = "none";
//     // document.querySelector(".cashOutParent").style.display = "none";
//     // document.querySelector(".transferMoneyParent").style.display = "block";
// });
