document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", function() {
        navList.classList.toggle("active");
    });

    // Set footer year and last modified date
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
    document.getElementById("last-modified").textContent = document.lastModified;
});
