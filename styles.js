function inputForm() {
    let name = document.getElementById("name").value;
    let mssv = document.getElementById("mssv").value;
    if (name === "" || mssv === "") {
        document.getElementById(
            "demo"
        ).innerText = `Vui lòng nhập đầy đủ thông tin!`;
        return;
    }
    if (!/^[0-9]{8}$/.test(mssv)) {
        document.getElementById(
            "demo"
        ).innerText = `MSSV chỉ được phép ghi số!`;
        return;
    }
    document.getElementById("containerForm").style.display = "none";
    document.getElementById("formOutput").style.display = "flex";
    document.getElementById("nameOutput").innerText = name;
    document.getElementById("mssvOutput").innerText = mssv;
}
