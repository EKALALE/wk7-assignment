// Load stored theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // Animate the image on page load
    const image = document.getElementById("image");
    image.classList.add("bounce");
  
    // Remove the bounce class after animation ends so it can be re-triggered
    image.addEventListener("animationend", () => {
      image.classList.remove("bounce");
    });
  });
  
  // Theme toggle button
  document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    // Store the user preference in localStorage
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  
    // Animate image on user action
    const image = document.getElementById("image");
    image.classList.add("bounce");
  });
  