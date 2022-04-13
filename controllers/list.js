const mongoose = require('mongoose')

const list = async (req, res) => {
	const Schema = mongoose.Schema;
	const scholen = mongoose.model('scholen', new Schema({
		name: String,
		locatie: String,
		niveau: String,
		onderwerpen: Array
	}), 'scholen');

	const scholenList = await scholen.find().lean();
	res.render('list', { scholen: scholenList });
}

module.exports = {
	list: list
};