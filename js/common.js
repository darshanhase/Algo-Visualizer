let delay = 1000;
let isPaused = false;
let sortingInProgress = false;

function updateSpeed() {
  const slider = document.getElementById('speedRange');
  const value = parseInt(slider.value);
  const multiplier = (value / 20).toFixed(1);
  delay = 2200 - (value * 100);
  document.getElementById('speedValue').textContent = multiplier;
}

function generateBars() {
  const input = document.getElementById('arrayInput').value;
  const values = input.split(',').map(v => parseInt(v.trim())).filter(v => !isNaN(v));
  const container = document.getElementById('bar-container');
  container.innerHTML = '';

  values.forEach(val => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${val * 4}px`;
    bar.dataset.value = val;

    const label = document.createElement('div');
    label.classList.add('bar-value');
    label.textContent = val;
    bar.appendChild(label);

    container.appendChild(bar);
  });
}

function pauseSort() {
  isPaused = !isPaused;
}
