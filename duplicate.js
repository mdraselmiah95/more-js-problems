const names = ['Asif', 'Rohim', 'Shakib', 'Roni', 'Asif', 'Mizan', 'Josim', 'Jankar', 'Roni'];

function removeDuplicate(names) {
    const unique = [];
    /*   for (let i = 0; i < names.length; i++){
          const element = names[i];
          // console.log(element);
      } */
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

// short version of loop

/* for (const element of names) {
    console.log(element);
}
 */
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);


// Remove Duplicate numbers

const numbers = [11, 23, 42, 42, 56, 66, 22, 55, 86, 11, 8, 97, 91, 9, 110, 110];

function removeDuplicateNumber(numbs) {
    const unique = [];
    for (const element of numbs) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const newNumbers = removeDuplicate(numbers);
console.log(newNumbers);