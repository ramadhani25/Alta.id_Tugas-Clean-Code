// Code Sebelum diubah

// class kendaraan {
//     var totalroda = 0;
//     var kecepatanperjam = 0;
// }

// class mobil extends kendaraan {
//     void berjalan() {
//         tambahkecepatan(10);
//     }

//     tambahkecepatan(var kecepatanbaru) {
//         kecepatanperjam = kecepatanperjam + kecepatanbaru;
//     }
// }

// void main() {
//     mobilcepat = new mobil();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();

//     mobillamban = new mobil();
//     mobillamban.berjalan();
// }

// Code Setelah diubah

class Kendaraan {
    constructor(totalroda, kecepatanperjam) {
        this.totalroda = 0;
        this.kecepatanperjam = 0;
    }
    

}

class mobil extends Kendaraan {

    berjalan() {
        this.tambahKecepatan(10);
        console.log(`Kecepatan mobil saat ini adalah : ${this.kecepatanperjam}`);
    }

    tambahKecepatan(kecepatanbaru) {
        this.kecepatanperjam = this.kecepatanperjam + kecepatanbaru;
    }
}

function main() {
    let mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    
    let mobillamban = new mobil();
    mobillamban.berjalan();
}

main();