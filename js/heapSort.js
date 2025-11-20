async function startHeapSort() {
  const bars = document.querySelectorAll('.bar');
  let n = bars.length;

  // Build the max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(bars, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    bars[i].style.backgroundColor = 'green'; // Mark as sorted
    await swapBars(bars[0], bars[i]); // Swap root (largest) with the last element
    await heapify(bars, i, 0); // Reheapify the remaining elements
  }
  bars[0].style.backgroundColor = 'green'; // Mark the final element as sorted
}

async function heapify(bars, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  // Compare left child with the largest
  if (l < n && parseInt(bars[l].dataset.value) > parseInt(bars[largest].dataset.value)) {
    largest = l;
  }

  // Compare right child with the largest
  if (r < n && parseInt(bars[r].dataset.value) > parseInt(bars[largest].dataset.value)) {
    largest = r;
  }

  if (largest !== i) {
    // Swap and mark comparison bars
    bars[i].style.backgroundColor = 'orange'; // Current node being checked
    bars[largest].style.backgroundColor = 'red'; // Largest node (to be swapped)
    await swapBars(bars[i], bars[largest]);
    await heapify(bars, n, largest); // Recursively heapify the subtree
  }

  // Restore original colors for the processed bars
  bars[i].style.backgroundColor = 'steelblue';
  if (largest !== i) {
    bars[largest].style.backgroundColor = 'steelblue';
  }
}
