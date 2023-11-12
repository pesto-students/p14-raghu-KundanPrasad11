const displayWindowProperties = () => {
  console.log(navigator.userAgent);

  console.log(`screen width: ${screen.width}, screen height: ${screen.height}`);

  console.log(`location.href: ${location.href}, location.pathname ${location.pathname}`);

  localStorage.setItem("name", "Bhupendra Jogi");
  const name = localStorage.getItem("name");
  if(localStorage.getItem("name")) {
    console.log(`retrieved name from local storage: ${name}`)
  } else {
    console.log("Not found")
  }

  sessionStorage.setItem("city", "Bangalore");
  const city = sessionStorage.getItem("city");
  if(sessionStorage.getItem("city")) {
    console.log(`retrieved city from session storage: ${city}`)
  } else {
    console.log("Not found")
  }
}

displayWindowProperties()