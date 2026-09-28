const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// Lấy xe đầu hàng đợi theo FIFO
const xeVaoSac = hangDoiXeCho.shift();

console.log('Xe vào sạc:', xeVaoSac);

// Thêm xe mới vào cuối hàng đợi
hangDoiXeCho.push('43D-88888');

// Hiển thị danh sách xe còn chờ
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}