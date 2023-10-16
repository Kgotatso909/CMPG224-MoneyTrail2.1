 function openPopup() {
        // Create a pop-up in-frame window
        const popupWindow = window.open('', '_blank', 'width=400,height=300');

        // Create the content for the pop-up window
        const popupContent = `
            <html>
            <head>
                <title>Add Account</title>
                <link rel="stylesheet" href="css/home.css">
            </head>
            <body>
 <div id="container">
    <h2>Add Expense/Income</h2>
    <form id="expenseForm">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Name">

        <label for="category">Category:</label>
        <select id="category">
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Shopping">Shopping</option>
            <option value="Housing">Housing</option>
            <option value="Transportation">Transportation</option>
            <option value="Life & Entertainment">Life & Entertainment</option>
            <option value="Investment">Investment</option>
            <option value="Others">Others</option>
        </select>

        <label for="paymentType">Payment Type:</label>
        <select id="paymentType">
            <option value="Cash">Cash</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Web Payment">Web Payment</option>
            <option value="Voucher">Voucher</option>
        </select>

        <label for="note">Note:</label>
        <input type="text" id="note" placeholder="Note">

        <label for="account">Account:</label>
        <input type="text" id="account" placeholder="Account">

        <label for="type">Type:</label>
        <select id="type">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
        <br />
        <button onclick="submitAccount()">Submit</button>
    </form>
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
        // Retrieve the account number from the pop-up window
        const accountNumber = window.opener.document.getElementById('accountNumber').value;

        // You can now handle the submitted account number as needed
        // For example, you can update your application with the entered account number.
        console.log('Account Number:', accountNumber);

        // Close the pop-up window
        window.close();
    }