async function startSelectionSort() {
    if (sortingInProgress) return;
    sortingInProgress = true;
  
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
      bars[minIndex].style.backgroundColor = 'orange';
  
      for (let j = i + 1; j < n; j++) {
        while (isPaused) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
  
        bars[j].style.backgroundColor = 'red';
  
        const val1 = parseInt(bars[j].dataset.value);
        const val2 = parseInt(bars[minIndex].dataset.value);
  
        await new Promise(resolve => setTimeout(resolve, delay));
  
        if (val1 < val2) {
          if (minIndex !== i) {
            bars[minIndex].style.backgroundColor = 'steelblue';
          }
          minIndex = j;
          bars[minIndex].style.backgroundColor = 'orange';
        } else {
          bars[j].style.backgroundColor = 'steelblue';
        }
      }
  
      if (minIndex !== i) {
        await swapBars(bars[i], bars[minIndex]);
      }
  
      bars[minIndex].style.backgroundColor = 'steelblue';
      bars[i].style.backgroundColor = 'green';
    }
  
    sortingInProgress = false;
  }
  