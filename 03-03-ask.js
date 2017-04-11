var questions = [
	'what is your name?',
	'what is your fav hobby?',
	'what is your preferred programming language?'
];

var answers = [];
	
function ask(i) {
	process.stdout.write(`\n\n\n\n ${(questions[i])}`);
	process.stdout.write('  >  ');
}
// event listner, process runs asynchronously
process.stdin.on('data', function(data) {
	// 1
	// process.stdout.write('\n' + data.toString().trim() + '\n');

	// save answers into array
	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		// as long as there are more questions to ask, we will ask them
		ask (answers.length);
	} else {
		process.exit(); // will stop process
	}
});

// listen for exit event
process.on('exit', function() {

	// display answers
	process.stdout.write('\n\n\n\n');

	process.stdout.write(`go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]}`);

	process.stdout.write('\n\n\n\n');

});

ask(0);
