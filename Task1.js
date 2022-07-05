const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try { // blok kode yang akan menguji program/kebenaranya
				if (typeof day !== 'string') {
					reject(new Error('Input harus menggunakan string!'));
					return;
				}
				const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
				let cek = dataDay.find((item) => {
					return item === day.toLowerCase(); // mengecilkan semua huruf pada data day
				});
				if (cek) {
					resolve(cek);
				} else {
					reject(new Error('Hari ini bukan hari kerja'));
				}
			} catch { // blok kode yang akan dieksekusi, jika terjadi kesalahan pada blok try diatas
				reject(new Error('Program Error!'));
			}
		}, 3000);
	});
};

cekHariKerja("senin")
	.then((res) => console.log(res)) // untuk mengolah jika hasil sukses
	.catch((err) => console.log(err.message)); // untuk mengolah jika hasil gagal dan mengirim pesan error