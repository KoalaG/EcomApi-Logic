// REQUIRE MODULES ============================================================
const MYSQL = require('mysql');

// DEFINE CONSTANTS ===========================================================
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
});

// RUN COMMANDS ===============================================================

connection.connect((err) => {
	console.log('connected');
	if (err) throw err;
});

// FUNCTIONS ==================================================================
function close() {
	connection.end();
}

function performQuery(SQL, Params) {

	// Type checking
	if ('string' != typeof(SQL) ) {
		throw new Error('SQL must be a string');
	}
	if (!(Params instanceof Array)) {
		throw new Error('Params must be an array');
	}

	// return a promise containing the query results
	return new Promise((resolve) => {
		connection.query(SQL, Params, (err, result) => {
			if (err) throw err;
			resolve(result);
		});
	});

}

function requireTable(table) {
	return require('./tables/' + table + '.js');
}

// EXPORTS ====================================================================
module.exports.close = close;
module.exports.performQuery = performQuery;
module.exports.table = requireTable;