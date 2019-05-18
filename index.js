// REQUIRE MODULES ============================================================
const User = require('./src/User/User.js');

// CLASSES ====================================================================
class EcomApp {

	constructor() {

		this.User = User;
	}

}

// EXPORTS ====================================================================
module.exports = EcomApp;