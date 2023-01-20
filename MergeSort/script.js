
const mergeSort = (arr) => {

  let leftSide = arr.slice(0,arr.length/2)
  let rightSide = arr.slice(arr.length/2,arr.length)

  const totalContainer = []
    totalContainer.push(leftSide)
    totalContainer.push(rightSide)

    console.log(totalContainer)


  if ((leftSide.length == 1 && rightSide.length == 1) ||(leftSide.length == 0 && rightSide.length == 1) ){

    return totalContainer

  }

  else {
    
   return mergeSort(leftSide) + mergeSort(rightSide)
  }
        

    }


console.log(mergeSort([3,1,2,4,4,2,1,2,2]))

  


    



   
       
        

     


     
        

    
    









