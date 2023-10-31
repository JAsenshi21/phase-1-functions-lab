function distanceFromHqInBlocks(someValue){
 if (someValue > 42) {
    return someValue - 42
 }
 else {return 42 - someValue}
}


function distanceFromHqInFeet(number) {
  //figure out the number of blocks
  let block = distanceFromHqInBlocks(number)
  //multiply blocks by feet
  return block * 264

}


function distanceTravelledInFeet(start, destination){
  let distance
  if(start > destination){
    distance = (start - destination) * 264
  } else {
      distance = (destination - start) * 264
  }
  return distance 

}

function calculatesFarePrice(start, destination){
  //1. get number of feet to travel
  let feet = distanceTravelledInFeet(start, destination) 
  if(feet < 400){
    return 0
    //2. calculate price from distance between 400 and 2000
  } else if(feet < 2000){
      return (feet - 400) * .02
  //3. between 2000 - 2500 return 25
  } else if (feet < 2500){
    return 25
  //4. return 'cannot travel that far'
  } else {
    return 'cannot travel that far'
  }

}
