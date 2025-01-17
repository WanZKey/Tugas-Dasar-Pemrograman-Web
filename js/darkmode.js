function toggleDarkMode() {
  const body = document.body;
  const darkmodeButton = document.getElementById("darkmode-toggle");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    darkmodeButton.innerHTML = `Mode Gelap`;
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    darkmodeButton.innerHTML = `Mode Terang`;
  }

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "dark");
  } else {
    localStorage.setItem("dark-mode", "light");
  }
}

const storedMode = localStorage.getItem("dark-mode");
const body = document.body;
const darkmodeButton = document.getElementById("darkmode-toggle");

if (storedMode === "dark") {
  body.classList.add("dark-mode");
  darkmodeButton.innerHTML = `Mode Terang`;
} else {
  body.classList.add("light-mode");
  darkmodeButton.innerHTML = `Mode Gelap`;
}
