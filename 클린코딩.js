console.log(null);

//null 수학적으로는 0
console.log(null + 123);

// 선언했지만 값은 정의되지 않고 할당
let varb;
console.log(typeof varb); //undefined

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log('=', years);
