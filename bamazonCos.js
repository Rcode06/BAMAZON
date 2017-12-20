
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

connection.connect(function(err) {
  if (err) throw err;
});

// my sql function
var toBuy = function() {
    connection.query('SELECT * FROM products', function(err, res) {
       if (err) throw err;
        //Creates a new table with cli-table
        var table = new Table({
            head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity']
        });

        //products for SALE
        console.log("Items for SALE: ");
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
        }
        // console.log("-----------------");
        //opens table
        console.log(table.toString());

        inquirer.prompt([
      {
        type: "imput",
        message: "What is the item ID you would like to buy?",
        name: "idNumber"
      },
      {
        type: "imput",
        message: "How many would you like to buy?",
        name: "howMany"
      },
    ])
      //   inquirer.prompt([{
      //       name: "itemId",
      //       type: "input",
      //       message: "What is the item ID you would like to buy? Click N if not purchase",
      //       validate: function(value) {
      //           // validate: function(val){
      //   return ! isNan(val) || val.toLowerCase() ==="n";
      // }
    
      //   }, {
      //       name: "howMany",
      //       type: "input",
      //       message: "How many of this item would you like to buy?",
      //        validate: function(value){
      //   return ! isNan(val) || val.toLowerCase() ==="n";
      // }
    
        // }
        // ])
    .then(function(answer) {
      // 'SELECT * FROM products JOIN departments ON products.department_name = departments.department_name'

  connection.query('SELECT * FROM products', function(err, res) {
          if (err) throw err;

          if(res[answer.idNumber ].stock_quantity > answer.howMany) {
            var newQuantity = parseInt(res[answer.idNumber - 1].stock_quantity) - parseInt(answer.howMany);
            var total = parseFloat(answer.howMany) * parseFloat(res[answer.idNumber - 1].price);
            total = total.toFixed(2);

            var departmentTotal = parseFloat(total) + parseFloat(res[answer.itemNumber - 1] + answer.total_sales + answer.total_profit);
            departmentTotal = departmentTotal.toFixed(2);

            connection.query("UPDATE departments SET ? WHERE ?", [{
              total_sales: departmentTotal
            }, {
              department_name: res[answer.idNumber - 1].department_name
            }], function(error, results) {});

            connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: newQuantity
            }, {
              item_id: answer.idNumber
            }], function(error, results) {
              if(error) throw error;

              console.log("Your order for " + answer.howMany + " " + res[answer.idNumber - 1].product_name +
                "(s) has been placed.");
              console.log("Your total is $" + total);
              orderMore();
            });

          } else {
            console.log("Insufficient quantity!, we only have " + res[answer.idNumber - 1].stock_quantity + " of that product.");
            orderMore();
          }     
      });
    }); 
  });
}

function orderMore() {
  inquirer.prompt([
    {
      type: "confirm",
      message: "Would you like to order anything else?",
      name: "again"
    },
  ]).then(function (answer) {
    if(answer.again) {
      toBuy();
    } else {
      exit();
    }
  });
}

function exit() {
  connection.end();
  console.log("Thank you for visiting us!");

}

toBuy();
