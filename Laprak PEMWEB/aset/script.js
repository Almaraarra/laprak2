function berubah() {
    document.body.classList.toggle("putih");
    document.body.classList.toggle("hitam");
}

function sembunyi() {
    const hill = document.getElementById("hill");
    hill.style.display = hill.style.display === "none" ? "block" : "none";
}

function html() {
    const htmlContent = document.getElementById("htm");
    htmlContent.style.display = htmlContent.style.display === "none" ? "block" : "none";
}

function css() {
    const cssContent = document.getElementById("css");
    cssContent.style.display = cssContent.style.display === "none" ? "block" : "none";
}

function javascript() {
    const jsContent = document.getElementById("javascript");
    jsContent.style.display = jsContent.style.display === "none" ? "block" : "none";
}
