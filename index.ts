/*
 * This program calculates mean, median and mode
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-03-5
 */

// get arguments
import { readFileSync } from 'fs'

function meanCalculation (newArray) {
  // This function calculates the mean
  let sum = 0
  for (let counter = 0; counter < newArray.length; counter++) {
    sum += parseFloat(newArray[counter])
  }
  let mean = sum / (newArray.length + 1)
  return mean
}

function medianCalculation (newArray) {
  // This function calculates the median
  let sum = 0
  let median = 0
  newArray.sort((a, b) => a - b)
  if (newArray.length % 2 === 0) {
    sum = newArray[newArray.length / 2] +
      newArray[(newArray.length / 2) + 1]
    median = sum / 2
  } else {
    median = Math.celi(newArray[newArray.length / 2])
  }
  return median
}

function modeCalculation (newArray) {
  // This function calculates the mode
  let modes = []
  let occurrences = {} // keep track of occurrences for each number
  let maxOccurrences  = 0 // keep track of highest occurrences

  // Count occurrences of each number
  for (let counter of newArray) {
    occurrences[counter] = (occurrences[counter] || 0) + 1
    if (occurrences[counter] > maxCount) {
      maxCount = occurrences[counter]
    }
  }

  // Identify modes
  for (let counter in count) {
    if (occurrences[counter] === maxOccurrences) {
      modes.push(parseFloat(counter))
    }
  }

  return modes
}

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

console.log(process.argv[2])


const file = readFileSync(process.argv[2], 'utf8')

const newArray = file.split(/\r?\n/)

// process
console.log(newArray)
let mean = meanCalculation(newArray)
let median = medianCalculation(newArray)
let mode = modeCalculation(newArray)

console.log("\nMean:", mean)
console.log("Median:", median)
console.log("Mode:", mode)


console.log("\nDone.")
