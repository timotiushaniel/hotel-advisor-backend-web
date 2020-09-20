-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2020 at 07:59 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hoteladvisor`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `id_hotel` int(10) NOT NULL,
  `id_kota` int(10) NOT NULL,
  `nama_hotel` varchar(30) NOT NULL,
  `alamat_hotel` varchar(40) NOT NULL,
  `harga_termurah` int(10) NOT NULL,
  `harga_termahal` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`id_hotel`, `id_kota`, `nama_hotel`, `alamat_hotel`, `harga_termurah`, `harga_termahal`) VALUES
(1, 1, 'Padma Hotel', 'Jl. Ciumbuleuit No. 93 Bandung', 750000, 2500000),
(4, 2, 'JW Marriot', 'Jl. Kuningan No. 33 Jakarta Selatan', 3500000, 7500000),
(5, 1, 'Hotel Hilton Bandung', 'Jl. Pasirkaliki No. 22 Bandung', 1200000, 8875000),
(6, 2, 'Hotel Ritz Carlton Pacific Pla', 'Jl. Mega Kuningan No. 1 Jakarta Selatan', 3500000, 12500000),
(7, 3, 'Hotel Cianjur', 'Jl. Raya Cipanas No. 33 Cianjur', 350000, 1500000),
(16, 16, 'Hotel Anyer Indah', 'Jl. Anyer Km. 33 Anyer', 850000, 2200000),
(17, 18, 'Fave Hotel Malang', 'Jl. Batu Malang No. 33 Malang', 800000, 4500000),
(19, 15, 'Holiday Inn Kemayoran', 'Jl. Kran Raya No. 7 Jakarta Pusat', 843000, 3430000),
(20, 19, 'Hotel Tentrem', 'Jl. P. Mangkubumi No.72A Yogyakarta', 2800000, 8500000),
(21, 19, 'Hotel Fave', 'Jl. yogyakarta No. 33 Yogyakarta', 450000, 750000);

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `id_provinsi` int(10) NOT NULL,
  `id_kota` int(10) NOT NULL,
  `nama_kota` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id_provinsi`, `id_kota`, `nama_kota`) VALUES
(1, 1, 'Bandung'),
(2, 2, 'Jakarta Selatan'),
(1, 3, 'Cianjur'),
(2, 15, 'Jakarta Pusat'),
(13, 16, 'Anyer'),
(9, 17, 'Semarang'),
(10, 18, 'Malang'),
(14, 19, 'Kota Yogyakarta'),
(15, 21, 'Nusa Tenggara');

-- --------------------------------------------------------

--
-- Table structure for table `provinsi`
--

CREATE TABLE `provinsi` (
  `id_provinsi` int(10) NOT NULL,
  `nama_provinsi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provinsi`
--

INSERT INTO `provinsi` (`id_provinsi`, `nama_provinsi`) VALUES
(1, 'Jawa Barat'),
(2, 'DKI Jakarta'),
(9, 'Jawa Tengah'),
(10, 'Jawa Timur'),
(13, 'Banten'),
(14, 'DI Yogyakarta'),
(15, 'Nusa Tenggara Timur'),
(16, 'Bali');

-- --------------------------------------------------------

--
-- Table structure for table `reviewer`
--

CREATE TABLE `reviewer` (
  `id_reviewer` int(10) NOT NULL,
  `nama_reviewer` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviewer`
--

INSERT INTO `reviewer` (`id_reviewer`, `nama_reviewer`) VALUES
(1, 'Chris Tan'),
(2, 'Timmy'),
(3, 'John'),
(4, 'Joe Lin'),
(8, 'Lin Wan Yi'),
(9, 'John Newton'),
(10, 'Nathanael');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_reviewer` int(10) NOT NULL,
  `id_transaksi` int(10) NOT NULL,
  `id_hotel` int(10) NOT NULL,
  `isi_review` varchar(500) NOT NULL,
  `tanggal_stay` date NOT NULL,
  `grade` float(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_reviewer`, `id_transaksi`, `id_hotel`, `isi_review`, `tanggal_stay`, `grade`) VALUES
(1, 1, 1, 'Padma Hotel dengan fasilitas yang keren dan harga yang murah. mantap.', '2020-04-06', 4.50),
(1, 3, 6, 'This 5 stars hotel is really worth the price! I got the best price, multiple bonus points, and a free upgraded room type. My room view was pool view and it’s quite magnificent during the night. Great service from all the staff, includes the security guys at the lobby was very polite.', '2020-03-17', 5.00),
(4, 4, 7, 'Hotel Cianjur is a great place to chill with your friend and family during the quarantine... worth to spend the money there!!', '2020-04-05', 4.30),
(10, 9, 5, 'great hotel. great location', '2020-04-01', 5.00),
(8, 12, 20, 'Hotel Tentrem is one of the greatest hotel in Yogyakarta... great atmosphere... nice breakfast .. a five-stars facilities..', '2020-02-13', 4.20),
(9, 13, 17, 'Cheap price with great services.. enjoy to stay there.. thank you', '2020-03-20', 4.60);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id_hotel`),
  ADD KEY `hotel_ibfk_1` (`id_kota`);

--
-- Indexes for table `kota`
--
ALTER TABLE `kota`
  ADD PRIMARY KEY (`id_kota`),
  ADD KEY `kota_ibfk_1` (`id_provinsi`);

--
-- Indexes for table `provinsi`
--
ALTER TABLE `provinsi`
  ADD PRIMARY KEY (`id_provinsi`);

--
-- Indexes for table `reviewer`
--
ALTER TABLE `reviewer`
  ADD PRIMARY KEY (`id_reviewer`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `transaksi_ibfk_1` (`id_reviewer`),
  ADD KEY `transaksi_ibfk_2` (`id_hotel`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id_hotel` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `id_kota` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `provinsi`
--
ALTER TABLE `provinsi`
  MODIFY `id_provinsi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `reviewer`
--
ALTER TABLE `reviewer`
  MODIFY `id_reviewer` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`id_kota`) REFERENCES `kota` (`id_kota`) ON DELETE CASCADE;

--
-- Constraints for table `kota`
--
ALTER TABLE `kota`
  ADD CONSTRAINT `kota_ibfk_1` FOREIGN KEY (`id_provinsi`) REFERENCES `provinsi` (`id_provinsi`) ON DELETE CASCADE;

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_reviewer`) REFERENCES `reviewer` (`id_reviewer`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_hotel`) REFERENCES `hotel` (`id_hotel`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
