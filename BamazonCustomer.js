		/*Libraries needed for this project*/

var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require("terminal-table");


		/*Connection to mySQL database*/

var connection = mysql.createConnection({
	user: 'root',
	password: '',
	host: 'localhost',
	port: 3306,
	database: 'Bamazon'
});

connection.connect(function (err) {
	if (err) {
		throw err;
	}
})

			/*Store Introduction*/
startApp();



/***********************************************************/

						/*Functions*/

	function startApp(callback){
		console.log('\n\n\n			Welcome to Bamazon!\n' + 'The following table gives you up to date inventory quantities in stock.\n\n');

			tableInventory(function(){
				askUser();
			});
	}



	function askUser(){
		inquirer.prompt([{
			name: 'choice',
			message: 'What would you like to do?',
			type: 'list',
			choices: ['Purchase Item By ID', 'Add item to the database', 'Place a Bid on an item']
			}]).then(function (a) {
				if (a.choice === 'Place a Bid on an item') {
					purchaseItem();
				} else if (a.choice === 'Add item to the database'){
					addItem();
				} else {
					placeBid();
				}
				console.log(a);
			});
	}



	function purchaseItem(){
		inquirer.prompt([{
		type: 'input',
		message: 'Number of item you would like to buy...',
		type: 'raw',
		}]).then(function (a) {
			if (a.choices === 'Place a Bid on an item') {
				placeBid();
			} else {
				purchaseItem();
			}
		});
	}


	function tableInventory(){
	var table = new Table();
		connection.query('SELECT * FROM Products', function(err, results){
		 	if (err){
		 		throw err;
		 	}else {
		 		table.push(["Item #", "Price", "Stock", "Product Name", "Department", "Current Bid"],
		 			['']);
		 		results.forEach(function(results){
		 		table.push(	
		  			[results.ItemID, results.Price, 
		  			results.StockQuantity, results.ProductName, 
		  			results.DepartmentName, results.currentBid],
		  			['']
		  	);
		  		})
	 		
					console.log("" + table);
	 		}
	 	})
	}



connection.end();





/*inquirer.prompt([{
      name: 'itemToAddTo',
      message: 'Please enter the id of the product you would like to add more of'
    },
    {
      name: 'qty',
      message: 'Please enter the quanity you would like to add'
    }]).then(function (answers) {
      var id = parseInt(answers.itemToAddTo);
      var qtyToAdd = parseInt(answers.qty);
      addInvToDb(id, qtyToAdd);
    })*/