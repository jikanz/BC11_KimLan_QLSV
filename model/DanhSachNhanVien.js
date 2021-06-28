function DanhSachNV() {
  this.list = [];
  this.themNV = function (NV) {
    return this.list.push(NV);
  };
  this.timViTri = function (maNV) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maNV === maNV) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.xoaNV = function (maNV) {
    var index = this.timViTri(maNV);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
  this.suaNV = function (maNV) {
    var index = this.timViTri(maNV);
    if (index !== -1) {
      return this.list[index];
    }
    return null;
  };
  this.capNhatNV = function (sinhVien) {
    var index = this.timViTri(sinhVien.maNV);
    if (index !== -1) {
      this.list[index] = sinhVien;
    }
  };
}
DanhSachNV.prototype.timKiem = function (keyword) {
  var arrTimKiem = [];
  for (var i = 0; i < this.list.length; i++) {
    if (
      this.list[i].tenNV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    ) {
      arrTimKiem.push(this.list[i]);
    }
  }
  return arrTimKiem;
};
