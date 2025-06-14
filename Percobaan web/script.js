function login(event) {
  event.preventDefault(); // mencegah form reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  // Data login sederhana (boleh kamu ganti)
  const validUser = "admin";
  const validPass = "admin";

  if (username === validUser && password === validPass) {
    window.location.href = "biodata.html"; // Arahkan ke halaman biodata
  } else {
    errorMsg.textContent = "Ciieeee lupaa, kebanyakan password siee !";
  }
}
