CREATE DATABASE IF NOT EXISTS hoteladvisor;

USE hoteladvisor;

CREATE TABLE provinsi (
	id_provinsi		int(10)		NOT NULL	AUTO_INCREMENT,
	nama_provinsi	varchar(20)	NOT NULL,
	
	PRIMARY KEY (id_provinsi)
);

CREATE TABLE kota(
	id_provinsi		int(10)		NOT NULL,
	id_kota			int(10)		NOT NULL	AUTO_INCREMENT,
	nama_kota		varchar(20)	NOT NULL,
	
	PRIMARY KEY (id_kota),
	FOREIGN KEY(id_provinsi) REFERENCES provinsi(id_provinsi)
);

CREATE TABLE hotel(
	id_hotel		int(10)		NOT NULL	AUTO_INCREMENT,
	id_kota			int(10)		NOT NULL,
	nama_hotel		varchar(30)	NOT NULL,
	alamat_hotel	varchar(40)	NOT NULL,
	harga_termurah	int(10)		NOT NULL,
	harga_termahal	int(10)		NOT NULL,
	
	PRIMARY KEY (id_hotel),
	FOREIGN KEY (id_kota) REFERENCES kota(id_kota)
);

CREATE TABLE reviewer(
	id_reviewer		int(10)		NOT NULL 	AUTO_INCREMENT,
	nama_reviewer	varchar(30)	NOT NULL,
	
	PRIMARY KEY (id_reviewer)
);

CREATE TABLE transaksi(
	id_reviewer		int(10)		NOT NULL,
	id_transaksi	int(10)		NOT NULL	AUTO_INCREMENT,
	id_hotel		int(10)		NOT NULL,
	isi_review		varchar(500)	NOT NULL,
	tanggal_stay	date		NOT NULL,
	grade			double(4,2)	NOT NULL,
	
	PRIMARY KEY (id_transaksi),
	FOREIGN KEY (id_reviewer) REFERENCES reviewer(id_reviewer),
	FOREIGN KEY (id_hotel) REFERENCES hotel(id_hotel)
);