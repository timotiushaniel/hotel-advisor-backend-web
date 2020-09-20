const datakota = require("../../../model/backend/datakotaModel")

module.exports = {
  index: function(req, res) {
    datakota.get(req.con, function(err, results) {
      if (err) throw err;
	  console.log(results);
      res.render("backend/home/datakota.ejs", { 
          results: results
        });
    })
  },
  
  create: function(req, res) {
    res.render("/datakota")
  },

  store: function(req, res) {
    datakota.create(req.con, req.body, function(err) {
      if(err) throw err;
      res.redirect("/datakota")
    })
  },

  edit: function(req, res) {
    datakota.getById(req.con, req.body.id_kota, function(err, results) {
      res.render("/datakota", { results: results[0] })
    })
  },

  update: function(req, res) {
    datakota.update(req.con, req.body, req.body.id_kota, function(err) {
      res.redirect("/datakota")
    })
  },

  destroy: function(req, res) {
    datakota.destroy(req.con, req.body.id_kota, function(err) {
      res.redirect("/datakota")
    })
  }

}
