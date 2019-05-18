// REQUIRE MODULES ============================================================
const UserClass = require('./UserClass.js');

// EXPORTS ====================================================================
module.exports = function ( param1 ) {

	
	if (param1 instanceof UserClass) {

	}

	// Functions to create or fetch a user
	if (param1 == undefined) {
		this.create = require('./UserCreate.js');
		this.getById = require('./UserGetById.js');
	}

	return this;

}