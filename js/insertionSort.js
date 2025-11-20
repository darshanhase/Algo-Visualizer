// insertionSort.js
async function startInsertionSort() {
  if (sortingInProgress) return;
  sortingInProgress = true;
  const bars = document.querySelectorAll('.bar');

  for (let i = 1; i < bars.length; i++) {
    let j = i - 1;
    let keyHeight = bars[i].style.height;
    let keyValue = bars[i].dataset.value;
    let keyText = bars[i].querySelector('.bar-value').textContent;

    bars[i].style.backgroundColor = 'red';

    await new Promise(resolve => setTimeout(resolve, delay));

    while (j >= 0 && parseInt(bars[j].dataset.value) > parseInt(keyValue)) {
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].dataset.value = bars[j].dataset.value;
      bars[j + 1].querySelector('.bar-value').textContent = bars[j].querySelector('.bar-value').textContent;

      bars[j + 1].style.backgroundColor = 'blue';
      bars[j].style.backgroundColor = 'red';

      await new Promise(resolve => setTimeout(resolve, delay));

      bars[j + 1].style.backgroundColor = 'steelblue';
      j--;
    }

    bars[j + 1].style.height = keyHeight;
    bars[j + 1].dataset.value = keyValue;
    bars[j + 1].querySelector('.bar-value').textContent = keyText;

    bars[i].style.backgroundColor = 'steelblue';
    bars[j + 1].style.backgroundColor = 'green';

    await new Promise(resolve => setTimeout(resolve, delay));
  }

  bars.forEach(bar => (bar.style.backgroundColor = 'green'));
  sortingInProgress = false;
}

