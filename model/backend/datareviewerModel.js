module.exports = {
    get: function(con, callback) {
      con.query("SELECT reviewer.id_reviewer AS id_reviewer, reviewer.nama_reviewer AS nama_reviewer, count(transaksi.id_reviewer) AS totalreview FROM reviewer LEFT JOIN transaksi ON reviewer.id_reviewer = transaksi.id_reviewer GROUP BY id_reviewer", callback)
    },
  
    getById: function(con, id_reviewer, callback) {
      con.query(`SELECT * FROM reviewer WHERE id_reviewer = ${id_reviewer}`, callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO reviewer SET 
        nama_reviewer = '${data.nama_reviewer}'`,
        callback
      )
    },

    update: function(con, data, id_reviewer, callback) {
      con.query(
        `UPDATE reviewer SET 
        nama_reviewer = '${data.nama_reviewer}' 
        WHERE id_reviewer = ${id_reviewer}`,
        callback
      )
    },
  
    destroy: function(con, id_reviewer, callback) {
      console.log(id_reviewer)
      con.query(`DELETE FROM reviewer WHERE id_reviewer = ${id_reviewer}`, callback)
    }
  }
  