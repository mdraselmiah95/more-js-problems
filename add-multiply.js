/* 
chairWood = 3cft per chair;
tableWood = 10cft per table;
bedWood = 50cft/bed;
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

    // let { chairQuantity, chairQuantity, bedQuantity } = element;
    // let element = (chairQuantity, tableQuantity, bedQuantity);

    if (typeof chairQuantity == 'string' || typeof tableQuantity == 'string' || typeof bedQuantity == 'string') {
        return 'enter valid number.'
    }
    if (chairQuantity <= 0 || tableQuantity <= 0 || bedQuantity <= 0) {
        return 'Please, enter Positive numbers.';
    }

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // Wood Calculator
    const totalChairWoodQuantity = perChairWood * chairQuantity;
    const totalTableWoodQuantity = perTableWood * tableQuantity;
    const totalBedWoodQuantity = perBedWood * bedQuantity;
    const totalWoodQuantity = totalChairWoodQuantity + totalTableWoodQuantity + totalBedWoodQuantity;
    return totalWoodQuantity;
}

const totalWoodNeed = woodCalculator(8, 'sic', 3);
console.log('Total Wood Needed:', totalWoodNeed, 'cft.');