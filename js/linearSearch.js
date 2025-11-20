async function linearSearch() {
    const input = document.getElementById("array-input").value;
    const target = parseInt(document.getElementById("search-target").value);

    if (!input || isNaN(target)) {
        alert("Please enter a valid array and search target!");
        return;
    }

    const array = input.split(",").map(Number);
    const container = document.getElementById("bars-container");

    // Clear existing bars
    container.innerHTML = "";

    // Create bars
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${array[i] * 3}px`;
        bar.style.width = "30px";
        bar.style.margin = "2px";
        bar.style.backgroundColor = "blue";
        bar.setAttribute("data-value", array[i]);
        container.appendChild(bar);
    }

    const bars = container.children;

    // Linear search animation
    for (let i = 0; i < array.length; i++) {
        bars[i].style.backgroundColor = "yellow"; // Highlight current bar
        await delay(300); // Wait 300ms

        if (array[i] === target) {
            bars[i].style.backgroundColor = "green"; // Found
            alert(`Element ${target} found at index ${i}`);
            return;
        } else {
            bars[i].style.backgroundColor = "red"; // Not a match
        }
    }

    alert(`Element ${target} not found in the array.`);
}
