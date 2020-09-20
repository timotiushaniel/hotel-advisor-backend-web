const home = require("../../../model/backend/homeModel")

module.exports = {
  index: function(req, res) {
    home.get(req.con, function(err, results) {
      res.render("backend/home/index.ejs", { results: results })
    })
  },

  /*
  create: function(req, res) {
    res.render("biodata/create")
  },

  store: function(req, res) {
    home.create(req.con, req.body, function(err) {
      if(err) throw err;
      res.redirect("/biodata")
    })
  },

  edit: function(req, res) {
    home.getById(req.con, req.params.id, function(err, rows) {
      res.render("biodata/edit", { data: rows[0] })
    })
  },

  update: function(req, res) {
    home.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/biodata")
    })
  },

  destroy: function(req, res) {
    home.destroy(req.con, req.params.id, function(err) {
      res.redirect("/biodata")
    })
  }
  */
}
