async function startBubbleSort() {
  if (sortingInProgress) return;
  sortingInProgress = true;

  const bars = document.querySelectorAll('.bar');
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      while (isPaused) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      const val1 = parseInt(bars[j].dataset.value);
      const val2 = parseInt(bars[j + 1].dataset.value);

      await new Promise(resolve => setTimeout(resolve, delay));

      if (val1 > val2) {
        await swapBars(bars[j], bars[j + 1]);
      }

      bars[j].style.backgroundColor = 'steelblue';
      bars[j + 1].style.backgroundColor = 'steelblue';
    }
    bars[bars.length - i - 1].style.backgroundColor = 'green';
  }
  bars[0].style.backgroundColor = 'green';
  sortingInProgress = false;
}

async function swapBars(bar1, bar2) {
  bar1.style.backgroundColor = 'blue';
  bar2.style.backgroundColor = 'blue';

  await new Promise(resolve => setTimeout(resolve, delay));

  const tempHeight = bar1.style.height;
  const tempValue = bar1.dataset.value;
  const tempText = bar1.querySelector('.bar-value').textContent;

  bar1.style.height = bar2.style.height;
  bar1.dataset.value = bar2.dataset.value;
  bar1.querySelector('.bar-value').textContent = bar2.querySelector('.bar-value').textContent;

  bar2.style.height = tempHeight;
  bar2.dataset.value = tempValue;
  bar2.querySelector('.bar-value').textContent = tempText;

  await new Promise(resolve => setTimeout(resolve, delay));
}
