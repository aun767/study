function tampilkan(id){

document.getElementById("materi").style.display = "none";
document.getElementById("percobaan").style.display = "none";
document.getElementById("hasil").style.display = "none";

    // Tampilkan topik yang sesuai dengan tombol yang ditekan
document.getElementById(id).style.display = "block";
}