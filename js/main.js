// Quick test: does JS run?
console.log("JS is running!");

// Footer year
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
