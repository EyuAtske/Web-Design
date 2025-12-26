for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 0; j < 5 - i; j++) {
        line += " ";
    }
    for (let k = 0; k < (2 * i) - 1; k++) {
        line += "*";
    }
    console.log(line);
}
for (let i = 5 - 1; i >= 1; i--) {
    let line = "";
    for (let s = 0; s < 5 - i; s++) {
        line += " ";
    }
    for (let j = 0; j < (2 * i) - 1; j++) {
        line += "*";
    }
    console.log(line);
}
