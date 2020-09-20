const datareviewer = require("../../../model/backend/datareviewerModel")

module.exports = {
  index: function(req, res) {
    datareviewer.get(req.con, function(err, results) {
      if (err) throw err;
      res.render("backend/home/datareviewer.ejs", { 
          results: results
        });
    })
  },


  create: function(req, res) {
    res.render("/datareviewer")
  },

  store: function(req, res) {
    datareviewer.create(req.con, req.body, function(err) {
      if(err) throw err;
      res.redirect("/datareviewer")
    })
  },

  edit: function(req, res) {
    datareviewer.getById(req.con, req.body.id_reviewer, function(err, rows) {
      res.render("/datareviewer", { data: rows[0] })
    })
  },

  update: function(req, res) {
    datareviewer.update(req.con, req.body, req.body.id_reviewer, function(err) {
      res.redirect("/datareviewer")
    })
  },

  destroy: function(req, res) {
    datareviewer.destroy(req.con, req.body.id_reviewer, function(err) {
      res.redirect("/datareviewer")
    })
  }
}
