console.log("Vendi Homework")

// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const array = Array.from({ length: 100 }, (_, i) => Math.floor(Math.random() * 50) + 1);

// Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, 
// gunakan method push() untuk menambahkan nilai baru pada array
console.log(array);
console.log(array.length);

const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < array.length; i++ ) {
    if (i % 2 === 0) {
        arrayGenap.push(array[i]);
    } else {
        arrayGanjil.push(array[i]);
    }
}

console.log(arrayGenap);
console.log(arrayGenap.length);
console.log(arrayGanjil);
console.log(arrayGanjil.length);

// Menentukan nilai Min dari array Genap
let minArrayGenap = array[0];
for (const element of arrayGenap) {
    if(element < minArrayGenap) {
        minArrayGenap = element;
    }
}

// Gunakan 2 array yang telah dibuat untuk :
// Menentukan nilai Min dari array Ganjil
let minArrayGanjil = array[0];
for (const element of arrayGanjil) {
    if(element < minArrayGanjil) {
        minArrayGanjil = element
    }
}


console.log(`Nilai min dari arrayGenap: ${minArrayGenap}`);
console.log(`Nilai min dari arrayGanjil: ${minArrayGanjil}`);

// Menentukan nilai Max dari array Genap
let maxArrayGenap = array[0];
for (const element of arrayGenap) {
    if(element > maxArrayGenap) {
        maxArrayGenap = element;
    }
}

// Menentukan nilai Max dari array Ganjil
let maxArrayGanjil = array[0];
for (const element of arrayGanjil) {
    if(element > maxArrayGanjil) {
        maxArrayGanjil = element
    }
}

console.log(`Nilai max dari arrayGenap: ${maxArrayGenap}`);
console.log(`Nilai max dari arrayGanjil: ${maxArrayGanjil}`);

// Menentukan nilai total dari array genap
let totalArrayGenap = 0;
for (const element of arrayGenap) {
    totalArrayGenap += element;
}

// Menentukan nilai total dari array ganjil
let totalArrayGanjil = 0;
for (const element of arrayGanjil) {
    totalArrayGanjil += element;
}

console.log(`Nilai total dari arrayGenap: ${totalArrayGenap}`);
console.log(`Nilai total dari arrayGanjil: ${totalArrayGanjil}`);

// Menentukan rata-rata dari array genap
let jumlahArrayGenap = 0;
for (const element of arrayGenap) {
    jumlahArrayGenap += element;
}

const averageArrayGenap = jumlahArrayGenap / arrayGenap.length;

// Menentukan rata-rata dari array ganjil
let jumlahArrayGanjil = 0;
for (const element of arrayGanjil) {
    jumlahArrayGanjil += element;
}

const averageArrayGanjil = jumlahArrayGanjil / arrayGanjil.length;
console.log(`Nilai rata-rata dari arrayGenap: ${averageArrayGenap}`);
console.log(`Nilai rata-rata dari arrayGanjil: ${averageArrayGanjil}`);

// Bandingkan kedua buah array :
// Menentukan perbandingan nilai min dari dua array
let perbandinganMin = minArrayGenap > minArrayGanjil;

console.log(`Perbandingan min arrayGenap lebih besar dari arrayGanjil: ${perbandinganMin}`);

// Menentukan perbandingan nilai max dari dua array
let perbandinganMax = maxArrayGenap > maxArrayGanjil;

console.log(`Perbandingan max arrayGenap lebih besar dari arrayGanjil: ${perbandinganMax}`);

// Menentukan perbandingan nilai total dari dua array
let perbandinganTotal = totalArrayGenap == totalArrayGanjil;
console.log(`Perbandingan total arrayGenap lebih besar dari arrayGanjil: ${perbandinganTotal}`);

// Menentukan perbandingan nilai rata-rata dari dua array
let perbandinganAverage = averageArrayGenap < averageArrayGanjil
console.log(`Perbandingan average arrayGenap lebih besar dari arrayGanjil: ${perbandinganAverage}`);

// Buatlah menjadi beberapa fungsi agar kode dapat digunakan kembali
// berikut ini beberapa fungsi yang berhasil saya buat dari case di atas

// Fungsi untuk menentukan nilai min dari array

function findMin(array) {
    let min = array[0];

    for (const element of array) {
        if (element < min)
        min = element
    }
    return min;
}
// contoh implementasi function
function findMinGanjil(arrayGanjil) {
    let min = arrayGanjil[0];
  
    for (const element of arrayGanjil) {
      if (element < min) {
        min = element;
      }
    }
  
    return min;
  }

console.log(minArrayGanjil);

// function untuk menentukan nilai max dari array
function findMax (array) {
    let max = array[0];

    for(const element of array) {
        if (element > max) {
            max = element
        }
    }
    return max;
}

// contoh implementasi function
function findMaxGenap (arrayGenap) {
    let max = arrayGenap[0];

    for (const element of arrayGenap) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

console.log(maxArrayGenap)

// function untuk menentukan nilai total dari array

function findTotal (array) {
    let total = array[0];

    for (const element of array) {
        total += element
    }
    return total;
}

// contoh implementasi
function findTotalGenap (arrayGenap) {
    let total = arrayGenap[0];

    for (const element of arrayGenap) {
        total += element
    }
    return total;
}
console.log(totalArrayGenap)
    
