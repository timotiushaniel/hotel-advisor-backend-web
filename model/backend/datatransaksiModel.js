module.exports = {
    get: function(con, callback) {
      con.query("SELECT transaksi.id_transaksi AS id_transaksi, transaksi.id_reviewer AS id_reviewer, reviewer.nama_reviewer AS nama_reviewer, hotel.nama_hotel AS nama_hotel, transaksi.isi_review AS isi_review, transaksi.tanggal_stay AS tanggal_stay, transaksi.grade AS grade FROM transaksi, reviewer, hotel WHERE reviewer.id_reviewer = transaksi.id_reviewer AND hotel.id_hotel = transaksi.id_hotel GROUP BY id_transaksi ORDER BY tanggal_stay DESC", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM transaksi WHERE id_transaksi = ${id}`, callback)
    },
  
    create: function(con, data, callback) {
      con.query(
        `INSERT INTO transaksi SET 
        id_reviewer = '${data.id_reviewer}', 
		id_transaksi = '${data.id_transaksi}',
		id_hotel = '${data.id_hotel}',
		isi_review = '${data.isi_review}',
		tanggal_stay = '${data.tanggal_stay}',
        grade = '${data.grade}'`,
        callback
      )
    },

    update: function(con, data, id, callback) {
      con.query(
        `UPDATE biodata SET 
        nama = '${data.nama}', 
        alamat = '${data.alamat}' 
        WHERE id_biodata = ${id}`,
        callback
      )
    },
  
    destroy: function(con, id_transaksi, callback) {
      con.query(`DELETE FROM transaksi WHERE id_transaksi = ${id_transaksi}`, callback)
    }
  }
  