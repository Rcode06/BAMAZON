
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "",
    database: "BAMAZON_db"
})

var connection = mysql.createConnection(keys.connection);

connection.connect(function(err) {
    if (err) throw err;
});

function menu() {
	inquirer.prompt([
		{
			type: "list",
			message: "What would you like to do?",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"],
			name: "action"
		},
	]).then(function (user) {
		switch(user.action) {
			case "View Products for Sale":
				viewProducts();
				break;
			case "View Low Inventory":
				viewLowInventory();
				break;
			case "Add to Inventory":
				addInventory();
				break;
			case "Add New Product":
				addNewProduct();
				break;
			case "Exit":
				exit();
				break;
		}
	});
}
