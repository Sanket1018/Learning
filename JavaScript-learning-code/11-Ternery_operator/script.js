const resultTernery = 12 > 10 ? 'Sanket':'Anurag';
console.log(resultTernery);


const gender = 'F';
const genderResult = `${gender.toLocaleLowerCase() === 'f' ? 'she':'he' } is a college student`;
console.log(genderResult);

// chain 

const chainresult = null ? 'Sanket' : 'Anurag' ? 12 : 0;
console.log(chainresult);