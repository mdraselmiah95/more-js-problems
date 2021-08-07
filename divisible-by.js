for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
        console.log('Collaboration');
    } else if (i % 3 == 0) {
        console.log('cool');
    } else if (i % 7 == 0) {

        console.log('warm');
    } else {
        console.log(i);
    }
}