function numArrLen(arr: number[]): number {
  return arr.length;
}

function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3, 4]));
console.log(strArrLen(['a', 'b', 'c']));

// generic
// 선언할 때 타입을 지정하기 어려운 경우 존재
// = 데이터 타입을 외부에서 지정
// = 생성 시점에서 타입을 명시
// => '재사용성 증가'
// => 타입을 변수처럼 사용하는 것
// 형태는 주로 <T>를 사용함 -> 사용시 T는 type만 작성 가능

// 1. function
function arrLen<T>(arr: T[]): number {
  return arr.length;
} // T 대신 다른 문자도 가능하지만(변수처럼), 대체로 T 사용
console.log(arrLen<number>([1, 2, 3, 4]));
console.log(arrLen<string>(['a', 'b', 'c']));

function print3<T, U>(x: T, y: U): void {
  console.log(x, y);
}
print3<string, number>('a', 1);

function print4<T>(x: T, y: T): void {
  console.log(x, y);
}
print4<string>('a', 'b');

// 2. interface
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone13: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: {
    color: 'white',
    storage: 256,
  },
};

console.log(iphone13);

const iphone12: Phone<string> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: 'white',
};
