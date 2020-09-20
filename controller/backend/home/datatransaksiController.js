const datatransaksi = require("../../../model/backend/datatransaksiModel")

module.exports = {
  index: function(req, res) {
    datatransaksi.get(req.con, function(err, results) {
      if (err) throw err;
      res.render("backend/home/datatransaksi.ejs", { 
          results: results
        });
    })
  },


  create: function(req, res) {
    res.render("/datatransaksi")
  },

  store: function(req, res) {
    datatransaksi.create(req.con, req.body, function(err) {
      if(err) throw err;
      res.redirect("/datatransaksi")
    })
  },

  edit: function(req, res) {
    datatransaksi.getById(req.con, req.params.id, function(err, rows) {
      res.render("biodata/edit", { data: rows[0] })
    })
  },

  update: function(req, res) {
    datatransaksi.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/datatransaksi")
    })
  },

  destroy: function(req, res) {
    datatransaksi.destroy(req.con, req.body.id_transaksi, function(err) {
      res.redirect("/datatransaksi")
    })
  }
}
