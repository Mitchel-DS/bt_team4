const { Keuze } = require('../models')

const form = async (req, res) => {
    res.render('form')
};

const keuze = (req, res) => {
  const result = new Keuze({
    locatie: req.body.locatie,
    niveau: req.body.niveau,
    onderwerp: req.body.onderwerp
  });
  result.save(),
  res.redirect('matches')
}

module.exports = {
	form: form,
	keuze: keuze
};