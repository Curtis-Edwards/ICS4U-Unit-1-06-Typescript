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
  let mean = 0
  let sum = 0
  for (let counter = 0; counter < newArray.length; counter++) {
    sum += parseFloat(newArray[counter])
    console.log(counter)
  }
  
  return mean
}

function medianCalculation (newArray) {
  // This function calculates the median
  let median = 0
  return median
}

function modeCalculation (newArray) {
  // This function calculates the mode
  let modes = [0]
  return modes
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

// process
console.log(newArray)
console.log(newArray.length)
let mean = meanCalculation(newArray)
let median = medianCalculation(newArray)
let mode = modeCalculation(newArray)

console.log("\nMean:", mean)
console.log("Median:", median)
console.log("Mode:", mode)


console.log("\nDone.")
