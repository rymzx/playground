// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh:
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(string) {
  // TODO: answer here
  ubahString = string.toLowerCase();
  var pisahString = ubahString.split('');
  var balikArray = pisahString.reverse();
  var gabungArray = balikArray.join('');

  if (gabungArray == ubahString) {
    return true;
  } else {
    return false;
  }
}

// masukan teks
const string = prompt('Enter a string: ');

// memanggil fungsi palindrom
const value = checkPalindrome(string);

console.log(value);
