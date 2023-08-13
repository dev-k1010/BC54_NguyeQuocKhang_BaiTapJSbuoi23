// Tính tiền lương nhân viên

function tinhTongLuong() {
  var tienLuong = document.getElementById("tienLuong1Ngay").value;
  var soNgay = document.getElementById("soNgayLam").value;
  var tongLuong = 0;
  tongLuong = tienLuong * soNgay;
  document.getElementById("tongLuong").innerHTML = tongLuong;
}
// Tính giá trị trung bình

function tinhGiaTriTB() {
  var soThuNhat = document.getElementById("soMot").value;
  var soThuHai = document.getElementById("soHai").value;
  var soThuBa = document.getElementById("soBa").value;
  var soThuTu = document.getElementById("soBon").value;
  var soThuNam = document.getElementById("soNam").value;
  var giaTriTB = 0;
  giaTri =
    parseFloat(soThuNhat) +
    parseFloat(soThuHai) +
    parseFloat(soThuBa) +
    parseFloat(soThuTu) +
    parseFloat(soThuNam);
  giaTriTB = parseFloat(giaTri) / 5;
  document.getElementById("giaTriTB").innerHTML = giaTriTB;
}
// Quy đổi tiền

function tinhGiaQuyDoi() {
  var soTien = document.getElementById("soTien").value;
  var giaQuyDoi = 0;
  giaQuyDoi = soTien * 23000;
  document.getElementById("giaQuyDoi").innerHTML = giaQuyDoi;
}

// Tính diện tích và chu vi hình chữ nhật

function tinhChuviDienTich() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  var ketQuaDT = 0;
  var ketQuaCV = 0;
  ketQuaCV = (parseFloat(chieuDai) + parseFloat(chieuRong)) * 2;
  document.getElementById("ketQuaCV").innerHTML = ketQuaCV;
  ketQuaDT = chieuDai * chieuRong;
  document.getElementById("ketQuaDT").innerHTML = ketQuaDT;
}

// Tính tổng hai ký số
function tinhTong() {
  var tongKySo = document.getElementById("tongHaiSo").value;
  soHangChuc = Math.floor((tongKySo % 100) / 10);
  soDonVi = Math.floor(tongKySo % 10);
  tongHaiSo = parseFloat(soHangChuc) + parseFloat(soDonVi);
  document.getElementById("ketQuaTong").innerHTML = tongHaiSo;
}
