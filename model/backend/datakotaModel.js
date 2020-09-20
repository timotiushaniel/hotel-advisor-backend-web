module.exports = {
    get: function(con, callback) {
      con.query("SELECT count(kota.id_kota) AS total_kota, kota.id_kota AS id_kota, provinsi.nama_provinsi AS nama_provinsi, kota.nama_kota AS nama_kota, count(hotel.id_hotel) AS totalhotel, provinsi.id_provinsi AS id_provinsi FROM provinsi, kota LEFT JOIN hotel ON kota.id_kota = hotel.id_kota WHERE provinsi.id_provinsi = kota.id_provinsi GROUP BY id_kota", callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO kota SET 
        id_provinsi = '${data.id_provinsi}', 
        nama_kota = '${data.nama_kota}'`,
        callback
      )
    },

    update: function(con, data, id_kota, callback) {
	  console.log(id_kota)
      con.query(
        `UPDATE kota SET 
        nama_kota = '${data.nama_kota}' 
        WHERE id_kota = ${id_kota}`,
        callback
      )
    },
  
    destroy: function(con, id_kota, callback) {
      console.log(id_kota)
      con.query(`DELETE FROM kota WHERE id_kota = ${id_kota}`, callback)
    }
  }