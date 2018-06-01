
function Anotation() {
  if (document.getElementById('usn').value != "" || document.getElementById('pwd').value != "") {
    if (document.getElementById('usn').value == "admin" || document.getElementById('pwd').value == "admin") {
      alert("Dobrý pokus!");
    }
    else {
      alert("Zde nic není :(");
    }
  }
}
