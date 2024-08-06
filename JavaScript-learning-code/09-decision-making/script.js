// debugger
// var userName = prompt('Enter your name') || 'procodrr';
var userName = prompt('Enter your name')
// var userAge = parseInt(prompt('Enter your age')) || 22;
var userAge = parseInt(prompt('Enter your age')) 

const gender = prompt('Enter your gender');

// if username and userage is not existed
if(!userName || !userAge) // here we userName = null and the null is falsy have false value. so null = false and !null = true. so username is not existed = !username simiary about !userAge
{
  userName = 'procodrr';
  userAge = 22;
}

console.log(userName);
console.log(userAge);

// if(userName == null && userAge == NaN)
//   {
//     userName= 'procodrr';
//     userAge = 22;
//   }

//   console.log(userName);
//   console.log(userAge); 


// truthy and falsy values
if(12) // 12 is a trthy value so it will inside the statement
{
  console.log('Hi');
}

// 0 is the falsy value so it not goes inside the statement
if(0)
{
  console.log('Hello');
}
else{
  console.log('World');
}

if(userAge>= 5 && userAge<=17)
{
  console.log(`${userName} is a school student`);
  console.log(`${userName}is studying science and maths`);
}
else if(userAge>=18 && userAge<=24)
  {
    console.log(`${userName} is a college student`);
    console.log(`${userName} is studying computer science`);
    console.log('if block executed');
  }
else if(userAge >=25 && userAge<=45)
{
  console.log(`${userName} is a working professional`);
  console.log(`${userName} is a web developer`);
}
else if(userAge > 45 && userAge <= 120)
{
  console.log("you are retired ")
}
else{
  console.log('You are imomortal');
}


if(userAge > 45){
  console.log(`${userName} is a ${gender}`);

  if(gender == 'male' || gender== 'Male' || gender== 'MALE')
  {
    console.log('He is retired')
  }

  if(gender == 'female' || gender=='Female' || gender=='FEMALE'){
    console.log('She is retired');
  }
}

// Nested if 
if(userName == 'Sanket')
{
  if(userAge == 22)
  {
    console.log("Sanket don't loose hope this is struggle you are a warrior");
  }
}

console.log('Program ended ')

  

