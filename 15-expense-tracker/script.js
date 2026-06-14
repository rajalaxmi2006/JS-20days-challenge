const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const transactionList = document.getElementById("transactionList");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add Transaction

function addTransaction() {
  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);
  const type = typeInput.value;
  if (description === "" || amount <= 0) {
    alert("Please enter valid details.");

    return;
  }

  const transaction = {
    id: Date.now(),
    description,
    amount,
    type,
  };

  transactions.push(transaction);
  saveTransactions();
  renderTransactions();
  descriptionInput.value = "";
  amountInput.value = "";
}

// Save Local Storage

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Delete Transaction

function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  saveTransactions();
  renderTransactions();
}

// Render Transactions

function renderTransactions() {
  transactionList.innerHTML = "";

  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.classList.add("transaction");

    if (transaction.type === "income") {
      income += transaction.amount;
      li.classList.add("income-item");
    } else {
      expense += transaction.amount;
      li.classList.add("expense-item");
    }

    li.innerHTML = `
            <span>
                ${transaction.description}
                - ₹${transaction.amount}
            </span>

            <button
            class="deleteBtn"
            onclick="deleteTransaction(${transaction.id})">
            Delete
            </button>
        `;

    transactionList.appendChild(li);
  });

  const balance = income - expense;
  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${expense}`;
  balanceEl.textContent = `₹${balance}`;
}

// Events
addBtn.addEventListener("click", addTransaction);

// Initial Load
renderTransactions();