//console.log(process.argv);// displays the process.argv array that inclused a path to node and a path to the current file

function grab(flag) {
	var index = process.argv.indexOf(flag);
	// find index of flag in the array, return the value, the next variable in the array to get that value.  if index === -1 we did not find the flag within the array, so reuturn null, else we did find the flag in array, so add 1 to find the next item
	return (index === -1) ? null : process.argv[index+1];
}

// set variables for flags
var greeting = grab('--greeting');

var user = grab('--user');

if (!user || !greeting) {
	// no flags found
	console.log("you blew it!");
} else {
	// log back to console
	console.log(`Welcome ${user}, ${greeting}`);
}

//console.log(process.argv);
