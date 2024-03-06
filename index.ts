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
  let sum = 0;
  for (let counter = 0; counter < newArray.length; counter++) {
    sum += parseFloat(array[counter])
  }
  let mean = sum / array.length
  return mean
}

function medianCalculation (newArray) {
  // This function calculates the median
  newArray.sort((a, b) => a - b);
  let median = 0
  if (array.length % 2 === 0) {
    median = ((newArray.length / 2) + ((newArray.length / 2) + 1) / 2)
  } else {
    median = Math.ceil(array.length / 2)
  }
  return median
}

function modeCalculation (newArray) {
  // This function calculates the mode
  let modes = []
  let count = {}
  let maxCount = 0

  // Count occurrences of each number
  for (let counter of array) {
    count[counter] = (count[counter] || 0) + 1
    if (count[counter] > maxCount) {
      maxCount = count[counter]
    }
  }

  // Identify modes
  for (let counter in count) {
    if (count[counter] === maxCount) {
      modes.push(parseFloat(counter))
    }
  }

  return modes;
}

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

console.log(process.argv[2])


const file = readFileSync(process.argv[2], 'utf8')
console.log(file)

const newArray = file.split(/\r?\n/)
// pop last element, since it will be empty (the EOF)
newArray.pop()
console.log(newArray)

// process
let mean = meanCalculation(newArray)
let median = medianCalculation(newArray)
let mode = modeCalculation(newArray)

console.log("\nMean:", mean)
console.log("Median:", median)
console.log("Mode:", mode)


console.log("\nDone.")
