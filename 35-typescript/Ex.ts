// basic prac
let olympic_newgame: readonly [object, boolean] = [
  { name: '쇼트트랙', type: '혼성 계주' },
  true,
];

// olympic_newgame[1] = false;

/////////////////////////
// interface prac
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};

////////////////////
// function
const sum1 = (a: number, b: number): void => console.log(a + b);
sum1(5, 11);

const sum4 = (a: number, b: number, c: number, d: number, e: number): number =>
  a + b + c + d + e;
console.log(sum4(1, 2, 3, 4, 10));

/// 해설
// function sum2(...a: number[]): number {
//   let sum = 0
//   a.forEach((el) => (sum += el))
//   return sum
// }

////////////////////
// generic
function arrElement<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) return false;
  else return arr[index];
}

console.log(arrElement<string>(['a'], 0));

console.log(arrElement<string>(['a'], 1)); // false
