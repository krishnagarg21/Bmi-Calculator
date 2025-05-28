const form = document.querySelector("form");

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value)
  // console.log(height);
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results");

  const bmi = (weight / ((height*height)/10000)).toFixed(2);
  console.log(bmi)
  if(isNaN(bmi)) results.innerHTML = "Chooti Bachi ho kya";
  else if(bmi < 18.6) results.innerHTML = bmi + " -> You are UnderWeight";else if(bmi >= 18.6 && bmi <= 24.9) results.innerHTML = bmi + " -> You are Healthy";
  else results.innerHTML = bmi + " -> You are overweight";



})
