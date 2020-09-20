const datahotel = require("../../../model/backend/datahotelModel")

module.exports = {
  index: function(req, res) {
    datahotel.get(req.con, function(err, results) {
      if (err) throw err;
      res.render("backend/home/datahotel.ejs", { 
          results: results
        });
    })
  },


  create: function(req, res) {
    res.render("/datahotel")
  },

  store: function(req, res) {
    datahotel.create(req.con, req.body, function(err) {
      if(err) throw err;
      res.redirect("/datahotel")
    })
  },

  edit: function(req, res) {
    datahotel.getById(req.con, req.body.id_hotel, function(err, rows) {
      res.render("/datahotel", { data: rows[0] })
    })
  },

  update: function(req, res) {
    datahotel.update(req.con, req.body, req.body.id_hotel, function(err) {
      res.redirect("/datahotel")
    })
  },

  destroy: function(req, res) {
    datahotel.destroy(req.con, req.body.id_hotel, function(err) {
      res.redirect("/datahotel")
    })
  }
}
