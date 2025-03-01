let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    const expression = display.value;
    fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        display.value = data.result;
        addToHistory(expression, data.result);
        fetchHistory();
    })
    .catch(error => {
        console.error('Error:', error);
        display.value = 'Error';
    });
}

function addToHistory(expression, result) {
    const li = document.createElement('li');
    li.textContent = `${expression} = ${result}`;
    historyList.appendChild(li);
}

function fetchHistory() {
    fetch('http://localhost:3000/history')
    .then(response => response.text())
    .then(data => {
        historyList.innerHTML = '';
        const historyEntries = data.trim().split('\n');
        historyEntries.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry;
            historyList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error fetching history:', error);
    });
}

// Fetch history on page load
fetchHistory();