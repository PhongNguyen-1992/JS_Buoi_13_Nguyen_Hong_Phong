function getID(id) {
    return document.getElementById(id)
}
// Nút Bài 1
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

// Nút Bài 2

function Muc_1(kw, price) {
    const rs = kw * price;
    return rs;
}
function Muc_2(kw, price) {
    const rs = (kw - 50) * price;
    return rs;
}
function Muc_3(kw, price) {
    const rs = (kw - 100) * price;
    return rs;
}
function Muc_4(kw, price) {
    const rs = (kw - 200) * price;
    return rs;
}
function Muc_5(kw, price) {
    const rs = (kw - 350) * price;
    return rs;
}

function BTN2() {
    const name_btn2 = getID("name_btn2").value;
    const soDien = getID("soDien").value * 1;
    result_2 = 0;
    if (0 <= soDien && soDien <= 50) {
        const Phs1 = Muc_1(soDien, 500)
        result_2 = Phs1
    } else if (50 < soDien && soDien <= 100) {
        const Phs1 = Muc_1(50, 500);
        const Phs2 = Muc_2(100, 650);
        result_2 = Phs1 + Phs2

    } else if (100 < soDien && soDien <= 200) {
        const Phs1 = Muc_1(50, 500);
        const Phs2 = Muc_2(100, 650);
        const Phs3 = Muc_3(200, 500);
        result_2 = Phs1 + Phs2 + Phs3

    } else if (200 < soDien && soDien <= 350) {
        const Phs1 = Muc_1(50, 500);
        const Phs2 = Muc_2(100, 650);
        const Phs3 = Muc_3(200, 850);
        const Phs4 = Muc_4(350, 1100);

        result_2 = Phs1 + Phs2 + Phs3 + Phs4

    } else if (soDien > 350) {
        const Phs1 = Muc_1(50, 500);
        const Phs2 = Muc_2(100, 650);
        const Phs3 = Muc_3(200, 850);
        const Phs4 = Muc_4(350, 1100);
        const Phs5 = Muc_5(soDien, 1300);

        result_2 = Phs1 + Phs2 + Phs3 + Phs4 + Phs5

    } else {
        alert("Vui lòng nhập số điện đúng")
        return;
    }
    content = `Tiền điện tháng: ${result_2.toLocaleString("vi-VN")} VNĐ`
    getID("noti2").innerHTML = content
}
// Nút Bài 3
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
    } else if (210000000 < chiu_thue && chiu_thue <= 384000000) {
        result = chiu_thue * 0.2;
    } else if (384000000 < chiu_thue && chiu_thue <= 624000000) {
        result = chiu_thue * 0.25;
    } else if (624000000 < chiu_thue && chiu_thue <= 960000000) {
        result = chiu_thue * 0.3;
    } else if (960000000 < chiu_thue) {
        result = chiu_thue * 0.35;
    } else {
        content = "Không phải đóng thuế";
    }

    content = `Thuế phải đóng là: ${result.toLocaleString("vi-VN")} VNĐ`
    getID("noti3").innerHTML = content
}
// Nút Bài 4
function BTN4() {
    let name = getID("name").value;
    let loaiKHG = getID("loaiKHG").value * 1;
    let coBan = getID("coBan").value * 1;
    let caoCap = getID("caoCap").value * 1;
    let result_4 = 0;
    let content_4 = "";
    if (loaiKHG === 1) {
        result_4 = 4.5 + 20.5 + (caoCap * 7.5)

    } else if (loaiKHG === 2 && coBan > 10) {
        result_4 = 15 + 75 + ((coBan - 10) * 5) + (caoCap * 50)

    } else if (loaiKHG === 2 && coBan <= 10) {
        result_4 = 15 + 75 + (caoCap * 50)

    }



    content = `Tiền thuê cáp của quý khách: ${result_4} $`
    getID("noti4").innerHTML = content
}

