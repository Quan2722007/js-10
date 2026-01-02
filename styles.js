function inputForm() {
    let name = document.getElementById("name").value;
    let mssv = document.getElementById("mssv").value;
    if (name === "" || mssv === "") {
        document.getElementById("demo").style.display = "block";
        return;
    }
    document.getElementById("containerForm").style.display = "none";
    document.getElementById("formOutput").style.display = "flex";
    document.getElementById("nameOutput").innerText = `Họ và tên : ${name}`;
    document.getElementById("mssvOutput").innerText = `MSSV : ${mssv}`;
}
