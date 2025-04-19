document.addEventListener("DOMContentLoaded", function () {
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    const comparisonOutput = document.getElementById("comparisonOutput");
    const compareButton = document.getElementById("compareButton");

    // Function to handle dropdown item selection
    function handleDropdownSelection(dropdown, event) {
        const selectedItem = event.target.closest(".dropdown-item");
        if (selectedItem) {
            // Remove 'selected' class from all items in the dropdown
            dropdown.querySelectorAll(".dropdown-item").forEach(item => {
                item.classList.remove("selected");
            });

            // Add 'selected' class to the clicked item
            selectedItem.classList.add("selected");

            // Store the selected value in the dropdown
            const value = selectedItem.getAttribute("data-value");
            dropdown.setAttribute("data-selected-value", value);
            console.log(`Dropdown selected value: ${value}`);
        }
    }

    // Handle dropdown1 item selection
    dropdown1.addEventListener("click", function (event) {
        handleDropdownSelection(dropdown1, event);
    });

    // Handle dropdown2 item selection
    dropdown2.addEventListener("click", function (event) {
        handleDropdownSelection(dropdown2, event);
    });

    // Handle the "Comparer" button click
    compareButton.addEventListener("click", function () {
        const value1 = dropdown1.getAttribute("data-selected-value");
        const value2 = dropdown2.getAttribute("data-selected-value");

        // Define the exempted combinations
        const exemptedValues1 = ["1", "3", "4", "5", "6"];
        const exemptedValues2 = ["A", "B", "C"];

        if (exemptedValues1.includes(value1) && exemptedValues2.includes(value2)) {
            comparisonOutput.textContent = "Cet usage mixte est exempté";
        } else {
            comparisonOutput.textContent = "Cet usage mixte est assujetti";
        }

        // Show the answer box
        comparisonOutput.style.display = "block";
    });
});