// FUNCTIONS
		// ================================================================================
		// Creates Function called "adder" with three arguments (x, y, z) that get passed into it and console.log the result
		function adder(x, y, z){
			// adder takes the arguments then prints out their sum.
			console.log(x + y + z);
		}
		// Creates a Function called "multiplier" with three arguments (x, y, z) that gets passed into it and console.log the result
		function multiplier(x, y, z){
			// multipler takes the arguments then prints out their product
			console.log(x * y * z);
		}
		// Creates a function called "isString" with three arguments (x, y, z) that gets passed into it and console.log whether all three are a strong or not
		function isString(x, y, z){
			// isString checks if each argument is a string using typeof. 
			// If everything is a string it will note that.
			if(typeof x === "string" && typeof y === "string" && typeof z === "string"){
				console.log("Yep. They are all strings");
			}
			// If anyone of them is NOT a string... it will note that.
			else {
				console.log("No... I don't believe these are strings.")
			}
		}
		// Creates a function called "vowelChecker" that takes in a single argument (x) and console.log's whether the value is a vowel or not
		function vowelChecker(x){
			// vowelChecker will grab the first letter (character)
			firstCharacter = x.toLowerCase().charAt[0];
			// Then check if that first letter is a vowel
			if (firstCharacter === "a" || firstCharacte	r === "e" || firstCharacter === "i" || firstCharacter === "o" || firstCharacter === "u"){
				// If so... it will log that.
				console.log("OMG. The first letter is a vowel!");
			
			}
			else {
				// If not... it will log that.
				console.log("First letter is NOT a vowel. *sadface*")
		
			}
		}
		// FUNCTION EXECUTION
		// ================================================================================
		// Each of the below lines of code is what actually "calls" or "runs" the functions. 
		//Without the below code, the functions above are like workers just waiting to be called into action. 
		
		adder(1, 2, 3);
		
		console.log("-------------------")
		multiplier(2, 3, 4);
		
		console.log("-------------------")
		isString("Ahmed", "Bad", "Monkey");
		isString("2", "Way", "Street")
		
		console.log("-------------------")
		vowelChecker("Eek")
		vowelChecker("Nah");