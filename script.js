const layar = document.getElementById('layar');

function tambah(nilai) {
  if (layar.value === '0' && nilai !== '.') {
    layar.value = nilai;
  } else {
    layar.value += nilai;
  }
}

function hapus() {
  layar.value = '0';
}

function mundur() {
  if (layar.value.length > 1) {
    layar.value = layar.value.slice(0, -1);
  } else {
    layar.value = '0';
  }
}

function hitung() {
  try {
    let ekspresi = layar.value.replace(/%/g, '/100');
    layar.value = eval(ekspresi);
  } catch (error) {
    layar.value = 'Error';
  }
}
