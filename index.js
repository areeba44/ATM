import inquirer from "inquirer";
let pincode = 2233;
let balance = 50000;
const pinanswer = await inquirer.prompt([{
        name: "pinnumber",
        type: "number",
        message: "enter a pin number",
    }]);
console.log(pinanswer.pinnumber);
if (pinanswer.pinnumber === pincode) {
    console.log("right pin code");
}
else {
    console.log("pin code in wrong please try again ");
}
const operation = await inquirer.prompt([{
        name: "option",
        type: "list",
        message: "select one option",
        choices: ["checkbalance", "withdraw", "fastcash"],
    }]);
console.log(operation.option);
if (operation.option === "checkbalance") {
    console.log("current balance is 30000");
}
else if (operation.option === "withdraw") {
    const amount = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "how much withdraw",
        }]);
    if (balance > amount.amount) {
        balance -= amount.amount;
        console.log(`your remaining balance ${balance}`);
    }
    else {
        console.log("your balance is unsufficenct");
    }
    ;
}
else if (operation.option === "fastcash") {
    const cash = await inquirer.prompt([{
            name: "fastcash",
            type: "list",
            message: "select one value",
            choices: ["10000", "20000", "30000", "40000"]
        }]);
    balance -= cash.fastcash;
    console.log(`your amount is ${cash.fastcash} your remaining balance is ${balance}`);
}
