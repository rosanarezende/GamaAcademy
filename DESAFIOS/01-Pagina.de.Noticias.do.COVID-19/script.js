function enviarMsg(event) {
  event.preventDefault();
  const textName = document.querySelector("#txtName").value;
  const assunto = `Email de ${textName}`;
  const txtEmail = document.querySelector("#txtEmail").value;
  const txtMsg = document.querySelector("#txtMsg").value;

  if (!textName || !txtEmail || !txtMsg) {
    alert("Preencha os campos para enviar a mensagem.");
  } else {
    window.open(
      `mailto:rezende_rosana@hotmail.com?subject=${assunto}&body=${txtMsg}&from=${txtEmail}`
    );
    document.querySelector("#txtName").value = "";
    document.querySelector("#txtEmail").value = "";
    document.querySelector("#txtMsg").value = "";
  }
}
