function superPrint<V>(a: V[]) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false]);

console.log(a, b, c, d);

type Player<E> = {
  name: string;
  extraInfo: E;
};
type SepiExtra = {
  favFood: string;
};
type SepiPlayer = Player<SepiExtra>;

const sepi: SepiPlayer = {
  name: "sepi",
  extraInfo: {
    favFood: "hamburger",
  },
};

const elliot: Player<null> = {
  name: "elliot",
  extraInfo: null,
};

type A = Array<number>;

let a: A = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {
  arr.forEach((item) => {
    console.log(item);
  });
}

printAllNumbers(a);
