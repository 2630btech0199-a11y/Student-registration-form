const form = document.getElementById("recommendation-form");
const list = document.getElementById("recommendation-list");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-popup");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("person-name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (message === "") {
        alert("Please enter a recommendation!");
        return;
    }

    const card = document.createElement("div");
    card.className = "recommendation";
    card.textContent = name ? name + ": " + message : message;

    list.appendChild(card);

    form.reset();

    // Show the popup
    popup.style.display = "flex";
});

closeButton.addEventListener("click", function() {
    popup.style.display = "none";
});
