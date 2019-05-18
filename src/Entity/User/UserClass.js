// REQUIRE MODULES ============================================================
const UserModel = require('./User');
const DB = require('../Database/MySql/MySql.js');
//const RowPacketDataClass = require('mysql/lib/protocol/packets/RowDataPacket.js');
//const DeepFreeze = require('deep-freeze');

// DEFINE CONSTANTS ===========================================================
const TABLE = 'user';

// CLASSES ====================================================================
class User {

	constructor(RowDataPacket) {

		// Check RowDataPacket provided correctly
		if (!RowDataPacket instanceof RowPacketDataClass) {
			throw new Error('RowDataPacket type invalid');
		}

		// Assign table row data to properties
		this.id = RowDataPacket.id;
		this.email = RowDataPacket.email;
		this.name = RowDataPacket.name;

		// Freeze properties
		DeepFreeze(this);

	}

	/**
	 * Update a users email address
	 * @param {string} newEmail
	 */
	async updateEmail(newEmail) {
		await DB.update(TABLE).where({ id: this.id }).set({ email: newEmail });
		return UserModel.getById(this.id);
	}


}

// EXPORTS ====================================================================
module.exports = User;