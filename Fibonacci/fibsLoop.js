
const fibs = (num) => {

    finalResult = [0,1]

    if (num == 0) {
        return finalResult = [0]
    }
    else if (num == 1){
        return finalResult
    }
    else

    for (let i = 2; i < num; i++){

        sum = finalResult[i-2] + finalResult[i-1]
        finalResult.push(sum)
    }


    return finalResult
  
}

