// Code your solution here
function findMatching(driverNames, string) {
    return driverNames.filter(match => string.toUpperCase() === match.toUpperCase())
}

function fuzzyMatch(driverNames, string) {
    let charLength = string.length
    return driverNames.filter(match => match.slice(0, charLength) === string)
}

function matchName(driverArray, string) {
    return driverArray.filter(element => element.name === string)
}