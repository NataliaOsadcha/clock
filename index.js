function clock(a, b) {
    if (a > b) {
        return b + 12 - a;
    } else {
        return b - a;
    }
} 

console.log(clock(2, 8));