function getSum(a, b)
{
  //create a variable at the lower of the two arguments
  let min = Math.min(a, b);
  //create a variable at the higher of the two arguments
  let max = Math.max(a, b);
  //create a counting variable to use in the for loop
  let sum = 0;
  
  //setup a for loop that interates from the min to the max, adding to the sum variable as you go
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}