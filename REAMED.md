Trường hợp kiểm thử
-Lấy xe vào sạc
-Hiển thị hàng đợi

Dữ liệu đầu vào
-['30A-98765', '29B-12345', '51C-45678']
-['29B-12345', '51C-45678', '43D-88888']

Kết quả sai thực tế
-pop() lấy 51C-45678 → sai FIFO
-i <= length → in thêm STT 4: undefined

Kết quả đúng mong đợi
-shift() lấy 30A-98765 → đúng FIFO
-i < length → chỉ in đúng 3 xe






2 Lỗi cần ghi nhớ
pop() → lấy cuối mảng 
shift() → lấy đầu mảng 
push() → thêm cuối mảng 
i <= array.length → duyệt dư 1 lần 
i < array.length → duyệt đúng số phần tử 
