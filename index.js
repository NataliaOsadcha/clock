function clock(a, b) {
    return (a > b) ? (b + 12 - a) : (b - a);
} 

console.log(clock(8, 8));