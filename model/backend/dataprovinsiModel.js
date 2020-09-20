module.exports = {
    get: function(con, callback) {
      con.query("SELECT provinsi.id_provinsi AS id_provinsi, provinsi.nama_provinsi AS nama_provinsi, count(kota.id_kota) AS totalkota FROM provinsi LEFT JOIN kota ON kota.id_provinsi = provinsi.id_provinsi GROUP BY id_provinsi", callback)
    },
  
    getById: function(con, id_provinsi, callback) {
      con.query(`SELECT * FROM provinsi WHERE id_provinsi = ${id_provinsi}`, callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO provinsi SET 
        nama_provinsi = '${data.nama_provinsi}'`,
        callback
      )
    },
  
    update: function(con, data, id_provinsi, callback) {
	  console.log(id_provinsi)
      con.query(
        `UPDATE provinsi SET 
        nama_provinsi = '${data.nama_provinsi}'
        WHERE id_provinsi = ${id_provinsi}`,
        callback
      )
    },
  
    destroy: function(con, id_provinsi, callback) {
	  console.log(id_provinsi)
      con.query(`DELETE FROM provinsi WHERE id_provinsi = ${id_provinsi}`, callback)
    }
  }
  