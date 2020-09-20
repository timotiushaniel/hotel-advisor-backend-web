const dataprovinsi = require("../../../model/backend/dataprovinsiModel")

module.exports = {
  index: function(req, res) {
    dataprovinsi.get(req.con, function(err, results) {
      if (err) throw err;
      res.render("backend/home/dataprovinsi.ejs", { 
          results: results
        });
    })
  },

  create: function(req, res) {
    res.render("/dataprovinsi")
  },

  store: function(req, res) {
    dataprovinsi.create(req.con, req.body, function(err) {
      if(err) throw err;
      res.redirect("/dataprovinsi")
    })
  },

  edit: function(req, res) {
    dataprovinsi.getById(req.con, req.body.id_provinsi, function(err, results) {
      res.render("/dataprovinsi", { results: results[0] })
    })
  },

  update: function(req, res) {
    dataprovinsi.update(req.con, req.body, req.body.id_provinsi, function(err) {
      res.redirect("/dataprovinsi")
    })
  },

  destroy: function(req, res) {
    dataprovinsi.destroy(req.con, req.body.id_provinsi, function(err) {
      res.redirect("/dataprovinsi")
    })
  }
}
