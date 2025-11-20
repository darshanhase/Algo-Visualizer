async function startQuickSort() {
  const bars = document.querySelectorAll('.bar');
  await quickSort(bars, 0, bars.length - 1);
  bars.forEach(bar => bar.style.backgroundColor = 'green'); // Mark as sorted
}

async function quickSort(bars, low, high) {
  if (low < high) {
    const pivotIndex = await partition(bars, low, high);
    await quickSort(bars, low, pivotIndex - 1); // Sort left partition
    await quickSort(bars, pivotIndex + 1, high); // Sort right partition
  }
}

async function partition(bars, low, high) {
  const pivot = parseInt(bars[high].dataset.value);
  bars[high].style.backgroundColor = 'purple'; // Pivot element

  let i = low - 1;

  for (let j = low; j < high; j++) {
    bars[j].style.backgroundColor = 'yellow'; // Mark the current element being compared

    await new Promise(resolve => setTimeout(resolve, delay));

    if (parseInt(bars[j].dataset.value) < pivot) {
      i++;
      await swapBars(bars[i], bars[j]); // Swap elements
      bars[i].style.backgroundColor = 'blue'; // Mark the swapped element
    } else {
      bars[j].style.backgroundColor = 'gray'; // Unchanged elements
    }
  }

  await swapBars(bars[i + 1], bars[high]); // Swap pivot into place
  bars[high].style.backgroundColor = 'steelblue'; // Reset pivot color
  return i + 1;
}
