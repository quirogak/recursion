
const mergeSort = (arr) => {

let leftSide = arr.slice(0,arr.length/2)
let rightSide = arr.slice(arr.length/2,arr.length)
 
 let totalContainer = []
 totalContainer.push(leftSide)
 totalContainer.push(rightSide)

  
  if ((leftSide.length == count && rightSide.length == count) ||(leftSide.length == count-1 && rightSide.length == count) ) return totalContainer
     
  else {

    let sorted = [mergeSort(leftSide) + mergeSort(rightSide)]
    let split = sorted[0].replaceAll(",", "")
    let newArray = split.split("")
  
    for (let i = 1; i < newArray.length; i++)
    for (let j = 0; j < i; j++)
        if (newArray[i] < newArray[j]) {
          let copy = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = copy;
        }

   return newArray

  }
}


console.log(mergeSort([3,1,4,2,4,2,2,1]))



