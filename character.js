function hello() {
    console.log("Hello World")
}

function roll() {
    remainingRolls = 6
    while (remainingRolls != 0) {
        eachRoll(remainingRolls)
        remainingRolls--
    }
}
function eachRoll(remainingRolls) {
    rollIterations = 4
    rolls = []
    while (rollIterations != 0) {
        x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        rolls.push(x)
        rollIterations--;
    }
    rolls.sort()
    var rollsElement = 'rolls' + remainingRolls
    document.getElementById(rollsElement).innerHTML = rolls
    removed = rolls.shift()

    var removedElement = 'removed' + remainingRolls
    document.getElementById(removedElement).innerHTML = removed

    var statusSum = rolls.reduce(getSum)
    var sumElement = 'sum' + remainingRolls
    document.getElementById(sumElement).innerHTML = statusSum

    var statMod = Math.floor((statusSum - 10) / 2)
    var modifierElement = 'modifier' + remainingRolls
    if (statMod > 0) {
        statMod = "+" + statMod
        document.getElementById(modifierElement).style.color = "Black"
    }
    if (statMod < 0) {
        document.getElementById(modifierElement).style.color = "Red"
    }
    if (statMod == 0) {
        document.getElementById(modifierElement).style.color = "Black"
    }

    document.getElementById(modifierElement).innerHTML = statMod
}

function getSum(total, num) {
    return total + num;
}

function bmi() {
    console.log("Hello BMI")
    race = document.getElementById("race")
    selected_race = race.options[race.selectedIndex].value
    console.log(selected_race)

    race = data[selected_race]

    race_total_inch = (race['base_height_ft'] * 12 + race['base_height_in'])
    height_iterations = race['height_x_dice_cnt']
    h_adj = 0
    while (height_iterations != 0) {
        h_adj = h_adj + Math.floor(Math.random() * (6 - 1 + 1)) + 1
        height_iterations--;
    }
    feet = (Math.floor((h_adj + race_total_inch) / 12))
    inches = ((h_adj + race_total_inch) % 12)
    height = (feet + '\' ' + inches  +'"')
    console.log(height)
    


    weight_iterations = race['weight_x_dice_cnt']
    w_adj = 0
    while (weight_iterations != 0) {
        w_adj = w_adj + Math.floor(Math.random() * (6 - 1 + 1)) + 1
        weight_iterations--;
    }
    weight = w_adj * h_adj + race['base_weight_lb']

    document.getElementById('height_val') .innerHTML = height
    document.getElementById('weight_val').innerHTML = weight + ' lbs'

    cm = (h_adj + race_total_inch) * 2.54
    kg = Math.floor(weight / 2.2)
    bmi_val = (kg/(cm/100))/(cm/100)
    console.log(bmi_val)
    if (bmi_val <18.5) {
        proportions = "Slight"
    }
    else if (bmi_val <24.9) {
        proportions = "Proportionate"
    }
    else if (bmi_val <31.9) {
        proportions = "Cuddly"
    }
    else {
        proportions = "Rotund"
    }

    console.log(proportions)
    document.getElementById('proportions_val').innerHTML = proportions
}