// Program 1.
const cekProvinsi = (provinsi) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            if (typeof provinsi !== 'string') {
                reject(new Error('Input harus menggunakan string!'));
                return;
            }
            const dataProvinsi = ["gorontalo", "banten", "papua"];
            try { // blok kode yang akan menguji program/kebenaranya
				let cek = dataProvinsi.find((e) => {
                    return e === provinsi.toLowerCase(); // mengecilkan semua huruf pada data provinsi
                });
				if (cek) {
					resolve(cek);
				} else {
					throw new Error("Provinsi tidak ditemukan!");
				}
			} catch (err) { // blok kode yang akan dieksekusi, jika terjadi kesalahan pada blok try diatas
				reject(err);
			}
		}, 3000);
	});
};

cekProvinsi("BANTEN")
	.then((res) => console.log(res)) // untuk mengolah jika hasil sukses
	.catch((err) => console.log(err.message)); // untuk mengolah jika hasil gagal dan mengirim pesan error

// Program 2.
const joinBootcamp = (join) =>
  new Promise((resolve, reject) => {
	setTimeout(() => {
        if (typeof join !== 'string') {
            reject(new Error('Input harus menggunakan string!'));
            return;
        }
        const bootcamp = ["pijarcamp"];
        try { // blok kode yang akan menguji program/kebenaranya
            let cek = bootcamp.find((e) => {
                return e === join.toLowerCase(); // mengecilkan semua huruf
            });
            if (cek) {
                resolve(cek)
                console.log("Saya sedang mengikuti pelatihan di")
            } else {
            reject(new Error("Saya tidak mengikuti pelatihan apapun"));
            }
        } catch (err) { // blok kode yang akan dieksekusi, jika terjadi kesalahan pada blok try diatas
            reject(err);
        }
    }, 1000);
});

joinBootcamp("PIJARCAMP")
  .then((res) => console.log(res)) // untuk mengolah jika hasil sukses
  .catch((err) => console.log(err.message)); // untuk mengolah jika hasil gagal dan mengirim pesan error