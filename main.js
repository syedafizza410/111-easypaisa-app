#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold `******Welcome To My Easypaisa App******`);
let availableBalance = 50000;
let pinNum = 12789;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your 5 digits pin",
        type: "number",
    }
]);
if (pinAnswer.pin === pinNum) {
    console.log(chalk.red.bold `Login Successfully`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["SendMoney", "BillPayment", "Easyload/Bundles", "Traintickets"]
        }
    ]);
    if (operationAns.operation === "SendMoney") {
        let sendmoneyAns = await inquirer.prompt([
            {
                name: "SendMoney",
                type: "list",
                choices: ["easypaisatransfer", "banktransfer", "cnictransfer", "raastpayment"]
            },
        ]);
        if (sendmoneyAns.SendMoney === "easypaisatransfer") {
            let easypaisatransfer = await inquirer.prompt([
                {
                    name: "MobileNumber",
                    type: "number",
                    message: "Enter Receiver's Mobile Number",
                }
            ]);
            if (easypaisatransfer.MobileNumber) {
                let transfermoneymethod = await inquirer.prompt([
                    {
                        name: "TransferMethod",
                        type: "number",
                        message: "Enter Transfer amount",
                    }
                ]);
                if (transfermoneymethod.TransferMethod > availableBalance) {
                    console.log("Insufficient balance, Please recharge your account");
                }
                else {
                    availableBalance -= transfermoneymethod.TransferMethod;
                    console.log(`${transfermoneymethod.TransferMethod} Transfer Successfully`);
                    console.log(`Your Remaining Balance is: ${availableBalance}`);
                }
            }
        }
        if (sendmoneyAns.SendMoney === "banktransfer") {
            let banktransferAns = await inquirer.prompt([
                {
                    name: "Selectbank",
                    message: "Select your bank name",
                    type: "list",
                    choices: ["Hbl", "Alfalah bank", "Islamic bank", "National bank of pakistan", "Allied bank", "Apna microfinance bank", "Askari bank"],
                }
            ]);
            if (banktransferAns.Selectbank) {
                let selectbankAns = await inquirer.prompt([
                    {
                        name: "AccountNumber",
                        type: "number",
                        mesaage: "Enter your acount number",
                    }
                ]);
                if (selectbankAns.AccountNumber) {
                    let purposeAns = await inquirer.prompt([
                        {
                            name: "purpose",
                            type: "list",
                            message: "Select Purpose Of Payment",
                            choices: ["Donations or Charity or Zakat", "Educational Payment", "Transfer to Own Accounts", "Insurance or Takaful", "Medical Expenses", "Clothing and Accessories Purchases", "Travelling", "Food and Groceries Purchases"],
                        }
                    ]);
                    if (purposeAns.purpose) {
                        let banktransferAns = await inquirer.prompt([
                            {
                                name: "MobileNumber",
                                type: "number",
                                message: "Enter Mobile Number",
                            }
                        ]);
                        if (banktransferAns.MobileNumber) {
                            let moneyTransferans = await inquirer.prompt([
                                {
                                    name: "Transferamount",
                                    type: "number",
                                    message: "Enter Transfer amount",
                                }
                            ]);
                            if (moneyTransferans.Transferamount > availableBalance) {
                                console.log("Insufficient balance, Please recharge your account");
                            }
                            else {
                                availableBalance -= moneyTransferans.Transferamount;
                                console.log(`${moneyTransferans.Transferamount} Transfer Successfully`);
                                console.log(`Your Remaining Balance is: ${availableBalance}`);
                            }
                        }
                    }
                }
            }
        }
        if (sendmoneyAns.SendMoney === "cnictransfer") {
            let cnicAns = await inquirer.prompt([
                {
                    name: "CnicNumber",
                    type: "number",
                    message: "Enter cnic number",
                }
            ]);
            if (cnicAns.CnicNumber) {
                let cnictransferAns = await inquirer.prompt([
                    {
                        name: "MobileNumber",
                        type: "number",
                        message: "Enter Mobile Number",
                    }
                ]);
                if (cnictransferAns.MobileNumber) {
                    let purposeAns = await inquirer.prompt([
                        {
                            name: "purpose",
                            type: "list",
                            message: "Select Purpose Of Payment",
                            choices: ["Donations or Charity or Zakat", "Educational Payment", "Transfer to Own Accounts", "Insurance or Takaful", "Medical Expenses", "Clothing and Accessories Purchases", "Travelling", "Food and Groceries Purchases"],
                        }
                    ]);
                    if (purposeAns.purpose) {
                        let transferAmount = await inquirer.prompt([
                            {
                                name: "Amount",
                                type: "number",
                                message: "Enter Transfer amount",
                            }
                        ]);
                        if (transferAmount.Amount > availableBalance) {
                            console.log("Insufficient balance, Please recharge your account");
                        }
                        else {
                            availableBalance -= transferAmount.Amount;
                            console.log(`${transferAmount.Amount} Transfer Successfully`);
                            console.log(`Your remainig balance is: ${availableBalance}`);
                        }
                    }
                }
            }
        }
        if (sendmoneyAns.SendMoney === "raastpayment") {
            let raastAns = await inquirer.prompt([
                {
                    name: "RaastID",
                    type: "number",
                    message: "Enter receiver raast ID",
                }
            ]);
            if (raastAns.RaastID) {
                let purposeAns = await inquirer.prompt([
                    {
                        name: "purpose",
                        type: "list",
                        message: "Select Purpose Of Payment",
                        choices: ["Donations or Charity or Zakat", "Educational Payment", "Transfer to Own Accounts", "Insurance or Takaful", "Medical Expenses", "Clothing and Accessories Purchases", "Travelling", "Food and Groceries Purchases"],
                    }
                ]);
                if (purposeAns.purpose) {
                    let transferAmount = await inquirer.prompt([
                        {
                            name: "Amount",
                            type: "number",
                            message: "Enter Transfer amount",
                        }
                    ]);
                    if (transferAmount.Amount > availableBalance) {
                        console.log("Insufficient balance, Please recharge your account");
                    }
                    else {
                        availableBalance -= transferAmount.Amount;
                        console.log(`${transferAmount.Amount} Transfer Successfully`);
                        console.log(`Your remainig balance is: ${availableBalance}`);
                    }
                }
            }
        }
    }
    if (operationAns.operation === "BillPayment") {
        let billpayAns = await inquirer.prompt([
            {
                name: "billpay",
                type: "list",
                message: "All bills",
                choices: ["Electricity", "Telephone", "Internet", "Water"],
            }
        ]);
        if (billpayAns.billpay === "Electricity") {
            let payelectricityAns = await inquirer.prompt([
                {
                    name: "Payelectricitybill",
                    type: "list",
                    choices: ["IESCO", "AJK-Barkiyat", "GB-Barkiyat", "FESCO"],
                }
            ]);
            if (payelectricityAns.Payelectricitybill) {
                let digitsAns = await inquirer.prompt([
                    {
                        name: "ReferenceNumber",
                        type: "number"
                    }
                ]);
                if (digitsAns.ReferenceNumber) {
                    let billpayAmount = await inquirer.prompt([
                        {
                            name: "billamount",
                            type: "number",
                            message: "Enter your bill amount",
                        }
                    ]);
                    if (billpayAmount.billamount > availableBalance) {
                        console.log("Insufficient balance, Please recharge your account");
                    }
                    else {
                        availableBalance -= billpayAmount.billamount;
                        console.log(`${billpayAmount.billamount} Thank You, Your Bill Has Been Paid.`);
                        console.log(`Your remainig balance is: ${availableBalance}`);
                    }
                }
            }
        }
        if (billpayAns.billpay === "Telephone") {
            let telephoneAns = await inquirer.prompt([
                {
                    name: "Telephonebill",
                    type: "list",
                    choices: ["PTCL", "SCO"],
                }
            ]);
            if (telephoneAns.Telephonebill) {
                let accountidAns = await inquirer.prompt([
                    {
                        name: "AccountID",
                        type: "number",
                    }
                ]);
                if (accountidAns.AccountID) {
                    let billpayAmount = await inquirer.prompt([
                        {
                            name: "billamount",
                            type: "number",
                            message: "Enter your bill amount",
                        }
                    ]);
                    if (billpayAmount.billamount > availableBalance) {
                        console.log("Insufficient balance, Please recharge your account");
                    }
                    else {
                        availableBalance -= billpayAmount.billamount;
                        console.log(`${billpayAmount.billamount} Thank You, Your Bill Has Been Paid.`);
                        console.log(`Your remainig balance is: ${availableBalance}`);
                    }
                }
            }
        }
        if (billpayAns.billpay === "Internet") {
            let internetAns = await inquirer.prompt([
                {
                    name: "Internetbill",
                    type: "list",
                    choices: ["Wateen", "wi-tribe", "Optix"],
                }
            ]);
            if (internetAns.Internetbill) {
                let idAns = await inquirer.prompt([
                    {
                        name: "CustomerID",
                        type: "number",
                        message: "Enter your customer ID",
                    }
                ]);
                if (idAns.CustomerID) {
                    let billpayAmount = await inquirer.prompt([
                        {
                            name: "billamount",
                            type: "number",
                            message: "Enter your bill amount",
                        }
                    ]);
                    if (billpayAmount.billamount > availableBalance) {
                        console.log("Insufficient balance, Please recharge your account");
                    }
                    else {
                        availableBalance -= billpayAmount.billamount;
                        console.log(`${billpayAmount.billamount} Thank You, Your Bill Has Been Paid.`);
                        console.log(`Your remainig balance is: ${availableBalance}`);
                    }
                }
            }
        }
        if (billpayAns.billpay === "Water") {
            let waterAns = await inquirer.prompt([
                {
                    name: "Waterbill",
                    type: "list",
                    choices: ["WSSC Swat", "WSSC", "QWASA"],
                }
            ]);
            if (waterAns.Waterbill) {
                let IdAns = await inquirer.prompt([
                    {
                        name: "ConsumerNumber",
                        type: "number",
                    }
                ]);
                if (IdAns.ConsumerNumber) {
                    let billpayAmount = await inquirer.prompt([
                        {
                            name: "billamount",
                            type: "number",
                            message: "Enter your bill amount",
                        }
                    ]);
                    if (billpayAmount.billamount > availableBalance) {
                        console.log("Insufficient balance, Please recharge your account");
                    }
                    else {
                        availableBalance -= billpayAmount.billamount;
                        console.log(`${billpayAmount.billamount} Thank You, Your Bill Has Been Paid.`);
                        console.log(`Your remainig balance is: ${availableBalance}`);
                    }
                }
            }
        }
    }
    if (operationAns.operation === "Easyload/Bundles") {
        let easyloadbundlesAns = await inquirer.prompt([
            {
                name: "Easyloadbundles",
                type: "list",
                choices: ["Easyload", "Postpaidbill", "Mobilepackages"],
            }
        ]);
        if (easyloadbundlesAns.Easyloadbundles === "Easyload") {
            let ans = await inquirer.prompt([
                {
                    name: "easyloadoptions",
                    type: "list",
                    choices: ["PostpaidBill", "PrepaidBill"],
                }
            ]);
            if (ans.easyloadoptions) {
                let numberAns = await inquirer.prompt([
                    {
                        name: "number",
                        type: "number",
                        message: "Enter contact number",
                    }
                ]);
                if (numberAns.number) {
                    let networkAns = await inquirer.prompt([
                        {
                            name: "Network",
                            type: "list",
                            message: "Select network",
                            choices: ["Telenor", "Jazz", "Ufone", "Zong"],
                        }
                    ]);
                    if (networkAns.Network) {
                        let easyloadPay = await inquirer.prompt([
                            {
                                name: "payamount",
                                type: "number",
                                message: "Enter easyload amount",
                            }
                        ]);
                        if (availableBalance -= easyloadPay.payamount) {
                            console.log(`${easyloadPay.payamount} Thank You, Your Bill Has Been Paid.`);
                            console.log(`Your remaining balance is: ${availableBalance}`);
                        }
                    }
                }
            }
        }
        if (easyloadbundlesAns.Easyloadbundles === "Postpaidbill") {
            let ans = await inquirer.prompt([
                {
                    name: "postpaidoptions",
                    type: "list",
                    choices: ["PostpaidBill", "PrepaidBill"],
                }
            ]);
            if (ans.postpaidoptions) {
                let numberAns = await inquirer.prompt([
                    {
                        name: "number",
                        type: "number",
                        message: "Enter contact number",
                    }
                ]);
                if (numberAns.number) {
                    let networkAns = await inquirer.prompt([
                        {
                            name: "Network",
                            type: "list",
                            message: "Select network",
                            choices: ["Telenor", "Jazz", "Ufone", "Zong"],
                        }
                    ]);
                    if (networkAns.Network) {
                        let easyloadPay = await inquirer.prompt([
                            {
                                name: "payamount",
                                type: "number",
                                message: "Enter amount",
                            }
                        ]);
                        if (availableBalance -= easyloadPay.payamount) {
                            console.log(`${easyloadPay.payamount} Thank You, Your Bill Has Been Paid.`);
                            console.log(`Your remaining balance is: ${availableBalance}`);
                        }
                    }
                }
            }
        }
        if (easyloadbundlesAns.Easyloadbundles === "Mobilepackages") {
            let netAns = await inquirer.prompt([
                {
                    name: "network",
                    type: "list",
                    choices: ["Telenor", "Jazz", "Ufone", "Zong"],
                }
            ]);
            if (netAns.network === "Telenor") {
                let telenorPkgs = await inquirer.prompt([
                    {
                        name: "telenorpackags",
                        type: "list",
                        choices: ["Weekly prime: 450", "Monthly extreme pro max: 1500", "Monthly ultimate: 1600", "Monthly easy card: 900", "Monthly extreme offer: 1200", "Easy card: 900"],
                    }
                ]);
                if (telenorPkgs.telenorpackags) {
                    let receiverAns = await inquirer.prompt([
                        {
                            name: "MobileNumber",
                            type: "number",
                            message: "Enter Receiver's Mobile Number",
                        }
                    ]);
                    if (receiverAns.MobileNumber) {
                        let pkgAmount = await inquirer.prompt([
                            {
                                name: "Pkgamount",
                                type: "number",
                                message: "Enter package amount",
                            }
                        ]);
                        if (availableBalance -= pkgAmount.Pkgamount) {
                            console.log(`${pkgAmount.Pkgamount} Thank You, Your Package Has Been Loaded.`);
                            console.log(`Your remaining balance is: ${availableBalance}`);
                        }
                    }
                }
            }
            if (netAns.network === "Jazz") {
                let jazzPkgans = await inquirer.prompt([
                    {
                        name: "jazzpackags",
                        type: "list",
                        choices: ["Weekly X: 580", "Monthly freedom: 1900", "Weekly freedom: 550", "Monthly max: 1700", "Monthly premium plus: 1500", "Monthly star: 1400"],
                    }
                ]);
                if (jazzPkgans.jazzpackags) {
                    let receiverAns = await inquirer.prompt([
                        {
                            name: "MobileNumber",
                            type: "number",
                            message: "Enter Receiver's Mobile Number",
                        }
                    ]);
                    if (receiverAns.MobileNumber) {
                        let pkgAmount = await inquirer.prompt([
                            {
                                name: "Pkgamount",
                                type: "number",
                                message: "Enter package amount",
                            }
                        ]);
                        if (availableBalance -= pkgAmount.Pkgamount) {
                            console.log(`${pkgAmount.Pkgamount} Thank You, Your Package Has Been Loaded.`);
                            console.log(`Your remaining balance is: ${availableBalance}`);
                        }
                    }
                }
            }
            if (netAns.network === "Ufone") {
                let ufonepkgAns = await inquirer.prompt([
                    {
                        name: "ufonepackages",
                        type: "list",
                        choices: ["Weekly grand offer: 500", "Digital mega offer: 1800", "Digital grand offer: 1600", "Super card grand: 999", "Super card max: 949", "Sab se bari plus offer: 420"],
                    }
                ]);
                if (ufonepkgAns.ufonepackages) {
                    let receiverAns = await inquirer.prompt([
                        {
                            name: "MobileNumber",
                            type: "number",
                            message: "Enter Receiver's Mobile Number",
                        }
                    ]);
                    if (receiverAns.MobileNumber) {
                        let pkgAmount = await inquirer.prompt([
                            {
                                name: "Pkgamount",
                                type: "number",
                                message: "Enter package amount",
                            }
                        ]);
                        if (availableBalance -= pkgAmount.Pkgamount) {
                            console.log(`${pkgAmount.Pkgamount} Thank You, Your Package Has Been Loaded.`);
                            console.log(`Your remaining balance is: ${availableBalance}`);
                        }
                    }
                }
            }
            if (netAns.network === "Zong") {
                let zongpkgAns = await inquirer.prompt([
                    {
                        name: "Zongpackages",
                        type: "list",
                        choices: ["Monthly supreme plus: 1200", "My5 family sharing: 2500", "Monthly pro max: 1700", "Weekly digital max: 540", "My3 family sharing: 2000", "Weekly super star: 500"],
                    }
                ]);
                if (zongpkgAns.Zongpackages) {
                    let receiverAns = await inquirer.prompt([
                        {
                            name: "MobileNumber",
                            type: "number",
                            message: "Enter Receiver's Mobile Number",
                        }
                    ]);
                    if (receiverAns.MobileNumber) {
                        let pkgAmount = await inquirer.prompt([
                            {
                                name: "Pkgamount",
                                type: "number",
                                message: "Enter package amount",
                            }
                        ]);
                        if (availableBalance -= pkgAmount.Pkgamount) {
                            console.log(`${pkgAmount.Pkgamount} Thank You, Your Package Has Been Loaded.`);
                            console.log(`Your remaining balance is: ${availableBalance}`);
                        }
                    }
                }
            }
        }
    }
    if (operationAns.operation === "Traintickets") {
        let ticketAns = await inquirer.prompt([
            {
                name: "Travellingto",
                type: "list",
                message: "Select city",
                choices: ["Lahore: 5000", "Daharki: 2500", "Hyerabad: 1500", "Islamabad: 8000"],
            }
        ]);
        if (ticketAns.Travellingto) {
            let Amount = await inquirer.prompt([
                {
                    name: "TicketAmount",
                    type: "number",
                    message: "Enter ticket amount",
                }
            ]);
            if (availableBalance -= Amount.TicketAmount) {
                console.log(`${Amount.TicketAmount} Thank You, Your Ticket Has Been Booked.`);
                console.log(`Your remainig balance is: ${availableBalance}`);
            }
        }
    }
}
else {
    console.log("5 digits pin is incorrect, please try again");
}
