let display = document.getElementById("display");

function append(value) {
    // Agar oxirgi belgi operator bo'lsa va yangi kelayotgan belgi ham operator bo'lsa, almashtirish
    const operators = ['+', '-', '*', '/'];
    let lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        display.value = display.value.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (display.value.trim() === "") return; // Bo'sh bo'lsa hisoblamaslik

    try {
        // Hisoblashdan oldin xavfsizroq tekshiruv (ixtiyoriy)
        let result = eval(display.value);
        
        // Nolga bo'lishni tekshirish
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = "Error";
    }
}