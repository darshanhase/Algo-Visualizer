async function binarySearch() {
    const input = document.getElementById("array-input").value;
    const target = parseInt(document.getElementById("search-target").value);

    if (!input || isNaN(target)) {
        alert("Please enter a valid sorted array and search target!");
        return;
    }

    let array = input.split(",").map(Number);
    
    // Make sure the array is sorted for binary search
    array.sort((a, b) => a - b);

    const container = document.getElementById("bars-container");
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
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Reset colors each loop
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = (i >= left && i <= right) ? "lightblue" : "blue";
        }

        bars[mid].style.backgroundColor = "yellow"; // Highlight middle bar
        await delay(500); // Wait for visual effect

        if (array[mid] === target) {
            bars[mid].style.backgroundColor = "green";
            alert(`Element ${target} found at index ${mid}`);
            return;
        } else if (array[mid] < target) {
            bars[mid].style.backgroundColor = "red"; // too small
            left = mid + 1;
        } else {
            bars[mid].style.backgroundColor = "red"; // too big
            right = mid - 1;
        }

        await delay(500); // Show red before moving on
    }

    alert(`Element ${target} not found in the array.`);
}
