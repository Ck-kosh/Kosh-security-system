async function getcctv() {
  try {
    let response = await fetch("Hik-Connect OpenAPI");
    let data = await response.json();

    document.getElementById("Cctv").innerText =
      data.content + " — " + data.author;
  } catch (error) {
    document.getElementById("Cctv").innerText ="Stay strong. You are not alone ";
  }
}


// Load on page open
getCctv();

if (document.getElementById("cctv")) {
  getcctv();
}