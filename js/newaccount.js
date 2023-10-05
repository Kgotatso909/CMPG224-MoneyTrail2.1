 function openPopup() {
        // Create a pop-up in-frame window
        const popupWindow = window.open('', '_blank', 'width=400,height=300');

        // Create the content for the pop-up window
        const popupContent = `
                     <!DOCTYPE html>
<html>
<head>
<title>Add new account</title>
<style type="text/css">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Young+Serif&display=swap');
body {
  margin:25px;
}

h3 {
 text-align:center;
 font-family: 'Young Serif', serif;
}
.account-box {
 padding:20px;
 box-shadow: 2px 2px 2px #ccc;
}
label {
}
input[type=text], input[type=color],input[type=number], select{
 margin-bottom: 25px;
 display:block;
 height:40px;
 border:none;
 border-bottom: 2px solid black;
 width:100%;
}

button {
  width:100%;
  height:40px;
  border-radius:10px;
  background:green;
  font-size:20px;
  font-weight:bold;
  font-family:Courier new,monospace;
  color:white;
}
</style>
</head>
<body>
   <div class="account-box">
      <h3>ADD NEW ACCOUNT</h3>
      <label for="account-name">Account name</label>
      <input type="text" id="account-name"  >
      <label for="bank-number">Bank account number</label>
      <input type="text" id="bank-number">
   
      <label for="paymentType">Type:</label> 
      <select id="paymentType"> 
      <option value="Cash">Cash</option> 
      <option value="Debit Card">Debit Card</option> 
      <option value="Credit Card">Credit Card</option> 
      <option value="Web Payment">Web Payment</option> 
      <option value="Voucher">Voucher</option> 
      </select>
      
      <label id="initial-amount" >initial value</label>
      <input type="number" >
      <label for="color">color</label>
      <input type="color" >
      
        <button onclick="submitAccount()">Submit</button>
   </div>
</body>
</html>
        `;

        // Write the content to the pop-up window
        popupWindow.document.open();
        popupWindow.document.write(popupContent);
        popupWindow.document.close();
    }

    function submitAccount() {
        const accountName = document.getElementById("account-name").value;
    const bankNumber = document.getElementById("bank-number").value;
    const initialAmount = document.querySelector("input[type=number]").value;
    const color = document.querySelector("input[type=color]").value;

    // Create a new account element
    const accountElement = document.createElement("div");
    accountElement.classList.add("rectangle-box");
    accountElement.style.backgroundColor = color;
    accountElement.innerHTML = `
        <p>${accountName}</p>
        <p>Account Number: ${bankNumber}</p>
        <p>Initial Amount: ${initialAmount}</p>
    `;

    // Append the new account element to the "accounts" div
    const accountsDiv = document.getElementById("accounts");
    accountsDiv.appendChild(accountElement);

        // Close the pop-up window
        window.close();
    }
