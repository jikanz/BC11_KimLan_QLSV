function NhanVien(
  _maNV,
  _tenNV,
  _email,
  _password,
  _date,
  _luong,
  _chucVu,
  _time
) {
  this.maNV = _maNV;
  this.tenNV = _tenNV;
  this.email = _email;
  this.password = _password;
  this.date = _date;
  this.luong = _luong;
  this.chucVu = _chucVu;
  this.time = _time;
  this.tinhTongLuong = 0;
  this.xepLoai = "";
  this.tinhTongLuong = function () {
    if (this.chucVu == "Sếp") {
      this.tinhTongLuong = this.luong * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tinhTongLuong = this.luong * 2;
    } else if (this.chucVu == "Nhân viên") {
      this.tinhTongLuong = this.luong;
    }
  };
  this.xepLoai = function () {
    if (this.time >= 192) {
      this.xepLoai = "NV xuất sắc";
    } else if (this.time >= 176) {
      this.xepLoai = "NV giỏi";
    } else if (this.time >= 160) {
      this.xepLoai = "NV khá";
    } else {
      this.xepLoai = "NV TB";
    }
  };
}
