// Get all elements with class "accordion"
var accordions = document.getElementsByClassName("accordion");

// Loop through each accordion element and add a click event listener
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Toggle the "active" class to highlight the clicked button
        this.classList.toggle("active");

        // Get the next sibling element, which is the panel
        var panel = this.nextElementSibling;

        // Check if the panel is currently open
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Close the panel smoothly
        } else {
            // Open the panel smoothly
            panel.style.maxHeight = panel.scrollHeight + "px";

            // Scroll the active accordion into view
            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
