function getID(id) {
    return document.getElementById(id)
}
function BTN1() {
    let totalNumber = getID("totalNumber").value * 1;
    let number1 = getID("number1").value * 1;
    let number2 = getID("number2").value * 1;
    let number3 = getID("number3").value * 1;
    let khu_vuc = getID("khu_vuc").value * 1;
    let doi_tuong = getID("doi_tuong").value * 1;
    let totalDiem = number1 + number2 + number3 + khu_vuc + doi_tuong
    let content = ""
    if (totalDiem >= totalNumber && number1 != 0 && number2 != 0 && number3 != 0)
        content = `Điểm thi bạn là ${totalDiem} Bạn Đã Đậu`;
    else
        content = `Điểm thi bạn là ${totalDiem} Bạn Đã Rớt`
    getID("noti").innerHTML = content
}

function BTN3() {
    let name = getID("name").value;
    let totalPrice = getID("totalPrice").value * 1;
    let phuThuoc = getID("phuThuoc").value * 1;
    const giam_tru = 4000000 + (phuThuoc * 1600000);
    const chiu_thue = totalPrice - giam_tru;

    let content = "";
    let result = 0;
    if (0 <= chiu_thue && chiu_thue < 60000000) {
        result = chiu_thue * 0.05;
    } else if (60000000 < chiu_thue && chiu_thue <= 120000000) {
        result = chiu_thue * 0.1;
    } else if (120000000 < chiu_thue && chiu_thue <= 210000000) {
        result = chiu_thue * 0.15;
    }else if (210000000 < chiu_thue && chiu_thue <= 384000000) {
        result = chiu_thue * 0.2;
    }else if (384000000 < chiu_thue && chiu_thue <= 624000000) {
        result = chiu_thue * 0.25;
    }else if (624000000 < chiu_thue && chiu_thue <= 960000000) {
        result = chiu_thue * 0.3;
    }else if (960000000 < chiu_thue) {
        result = chiu_thue * 0.35;
    }else {
       content = "Không phải đóng thuế"; 
    }

    content = `Thuế phải đóng là: ${result.toLocaleString("vi-VN")} VNĐ`
    getID("noti3").innerHTML = content
}
