const $form = document.querySelector("#form");
  const $buttonMailto = document.querySelector("#mail");
  
  $form.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:joaquin07david@gmail.com?subject=${form.get("nombre")}&${form.get("email")}&body=${form.get("mensaje")}`);
    $buttonMailto.click();
  }