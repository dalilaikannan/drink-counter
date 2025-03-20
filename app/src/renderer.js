let selectedDrink = null;

function selectDrink(drink) {
    selectedDrink = drink;
    alert(`You selected: ${drink}. Hot or Iced?`);
}

function selectTemp(temp) {
    if (!selectedDrink) {
        alert("Select a drink first!");
        return;
    }

    let drinkEntry = { drink: selectedDrink, temp: temp, date: new Date().toISOString() };

    let drinkLog = JSON.parse(localStorage.getItem("drinkLog")) || [];
    drinkLog.push(drinkEntry);

    localStorage.setItem("drinkLog", JSON.stringify(drinkLog));

    selectedDrink = null;

    updateDrinkLog();
}

function updateDrinkLog() {
    let drinkLog = JSON.parse(localStorage.getItem("drinkLog")) || [];
    let logList = document.getElementById("drink-log");
    logList.innerHTML = "";

    drinkLog.forEach((entry, index) => {
        let li = document.createElement("li");
        li.textContent = `${entry.temp} ${entry.drink} - ${new Date(entry.date).toLocaleString()}`;
        logList.appendChild(li);
    });
}

updateDrinkLog();