module.exports = {
    get: function(con, callback) {
      con.query("SELECT hotel.id_hotel AS id_hotel, hotel.nama_hotel AS nama_hotel, kota.nama_kota AS nama_kota, hotel.alamat_hotel AS alamat_hotel, hotel.harga_termurah AS harga_termurah, hotel.harga_termahal AS harga_termahal FROM hotel, kota WHERE kota.id_kota = hotel.id_kota ORDER BY hotel.id_hotel", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM hotel WHERE id_hotel = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO hotel SET 
        id_kota = '${data.id_kota}',
        nama_hotel = '${data.nama_hotel}', 
        alamat_hotel = '${data.alamat_hotel}',
		harga_termurah = '${data.harga_termurah}',
        harga_termahal = '${data.harga_termahal}'`,
        callback
      )
    },

    update: function(con, data, id_hotel, callback) {
      con.query(
        `UPDATE hotel SET 
        id_hotel = '${data.id_hotel}', 
		nama_hotel = '${data.nama_hotel}',
		alamat_hotel = '${data.alamat_hotel}',
		harga_termurah = '${data.harga_termurah}',
        harga_termahal = '${data.harga_termahal}' 
        WHERE id_hotel = ${id_hotel}`,
        callback
      )
    },
  
    destroy: function(con, id_hotel, callback) {
      con.query(`DELETE FROM hotel WHERE id_hotel = ${id_hotel}`, callback)
    }
  }
  