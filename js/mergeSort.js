async function startMergeSort() {
  const bars = document.querySelectorAll('.bar');
  await mergeSort(bars, 0, bars.length - 1);
  bars.forEach(bar => bar.style.backgroundColor = 'green');
}

async function mergeSort(bars, start, end) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  await mergeSort(bars, start, mid);
  await mergeSort(bars, mid + 1, end);
  await merge(bars, start, mid, end);
}

async function merge(bars, start, mid, end) {
  const left = [];
  const right = [];

  for (let i = start; i <= mid; i++) {
    left.push(parseInt(bars[i].dataset.value));
    bars[i].style.backgroundColor = 'red';
  }
  for (let i = mid + 1; i <= end; i++) {
    right.push(parseInt(bars[i].dataset.value));
    bars[i].style.backgroundColor = 'red';
  }

  await new Promise(resolve => setTimeout(resolve, delay));

  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      updateBar(bars[k], left[i]);
      i++;
    } else {
      updateBar(bars[k], right[j]);
      j++;
    }
    bars[k].style.backgroundColor = 'blue';
    k++;
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  while (i < left.length) {
    updateBar(bars[k], left[i]);
    bars[k].style.backgroundColor = 'blue';
    i++; k++;
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  while (j < right.length) {
    updateBar(bars[k], right[j]);
    bars[k].style.backgroundColor = 'blue';
    j++; k++;
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  for (let t = start; t <= end; t++) {
    bars[t].style.backgroundColor = 'steelblue';
  }
}

function updateBar(bar, value) {
  bar.style.height = `${value * 4}px`;
  bar.dataset.value = value;
  bar.querySelector('.bar-value').textContent = value;
}
