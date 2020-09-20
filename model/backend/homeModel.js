module.exports = {
  get: function(con, callback) {
    con.query("SELECT ( SELECT COUNT(*) FROM provinsi ) AS total_provinsi, ( SELECT COUNT(*) FROM kota ) AS total_kota, ( SELECT COUNT(*) FROM hotel ) AS total_hotel, ( SELECT COUNT(*) FROM reviewer ) AS total_reviewer, ( SELECT COUNT(*) FROM transaksi ) AS total_review FROM DUAL", callback)
  },

/*
  getById: function(con, id, callback) {
    con.query(`SELECT * FROM biodata WHERE id_biodata = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO biodata SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}'`,
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

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM biodata WHERE id_biodata = ${id}`, callback)
  }
  */
}
