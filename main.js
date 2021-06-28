var danhSachNV = new DanhSachNV();
var validation = new Validation();
getLocalStrorage();
function getEle(id) {
  return document.getElementById(id);
}
function layThongTinNV(isAdd) {
  // lấy thông tin user nhạp vào
  var maNV = getEle("tknv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var date = getEle("datepicker").value;
  var luong = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var time = getEle("gioLam").value;
  var kiemTra = true;

  if (isAdd) {
    kiemTra &=
      validation.kiemTraRong(maNV, "tbTKNV", "(*) vui lòng nhập") &&
      validation.kiemTraDoDaiKyTu(
        maNV,
        "tbTKNV",
        "(*)vui lòng nhập 4-6 số ",
        4,
        6
      ) &&
      validation.kiemTraMaTrung(maNV, "tbTKNV", "(*) Trùng", danhSachNV.list);
  }

  kiemTra &=
    validation.kiemTraRong(tenNV, "tbTen", "(*) vui lòng nhập") &&
    validation.kiemTraso(tenNV, "tbTen", "(*) vui lòng nhập chữ cái từ a-z");

  kiemTra &=
    validation.kiemTraRong(email, "tbEmail", "(*) vui lòng nhập") &&
    validation.kiemTraEmail(email, "tbEmail", "k hợp lệ");

  kiemTra &=
    validation.kiemTraRong(password, "tbMatKhau", "(*) vui lòng nhập") &&
    validation.kiemTraPass(password, "tbMatKhau", "mật khẩu k an toàn");

  kiemTra &= validation.kiemTraRong(date, "tbNgay", "(*) vui lòng nhập");
  kiemTra &= validation.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "(*) vui lòng nhập"
  );
  kiemTra &= validation.kiemTraRong(luong, "tbLuongCB", "(*) vui lòng nhập");
  kiemTra &= validation.kiemTraRong(time, "tbGiolam", "(*) vui lòng nhập");
  if (kiemTra) {
    // khởi tạo đối tượng sv
    var nhanVien = new NhanVien(
      maNV,
      tenNV,
      email,
      password,
      date,
      luong,
      chucVu,
      time
    );
    //tính điểm tb
    nhanVien.tinhTongLuong();
    nhanVien.xepLoai();
    return nhanVien;
  }
  return null;
}
getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV(true);
  if (!nhanVien) return;
  danhSachNV.themNV(nhanVien);
  taoBang(danhSachNV.list);
  setLocalStrorage();
  console.log(123);
});
function taoBang(arr) {
  var contentHTML = "";
  for (var i = 0; i < arr.length; i++) {
    contentHTML += `
    <tr>
    <td>${arr[i].maNV}</td>
    <td>${arr[i].tenNV}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].date}</td>
    <td>${arr[i].chucVu}</td>
    <td>${arr[i].tinhTongLuong}</td>
    <td>${arr[i].xepLoai}</td>
    </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = contentHTML;
}

function setLocalStrorage() {
  var arrString = JSON.stringify(danhSachNV.list);
  localStorage.setItem("DSNV", arrString);
}
function getLocalStrorage() {
  if (localStorage.getItem("DSNV")) {
    danhSachNV.list = JSON.parse(localStorage.getItem("DSNV"));
    taoBang(danhSachNV.list);
  }
}
