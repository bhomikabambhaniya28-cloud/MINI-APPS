document.getElementById("generate-btn").addEventListener("click", function () {
  const input = document.getElementById("qr-input").value;
  if (input.trim() === "") {
    alert("Please enter text or URL");
    return;
  }
  document.getElementById("qr-code").innerHTML = "";
  new QRCode(document.getElementById("qr-code"), {
    text: input,
    width: 200,
    height: 200,
  });
});
