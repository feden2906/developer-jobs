// Реалізувати функцію яка з переданої в неї стрічки буде повертати всі можливі комбінації літер за регістром
// 'a' --> [ 'A', 'a' ]
// 'ab' --> [ 'AB', 'Ab', 'aB', 'ab' ]
// 'abc' --> [ 'ABC', 'ABc', 'AbC', 'Abc', 'aBC', 'aBc', 'abC', 'abc' ]

const string = 'abc';

function f4(x) {
  const arr = Array(2 ** x.length).fill(0);

  return arr.map((_, i) =>
    [...i.toString(2).padStart(x.length, '0')].reduce(
      (acc, curr, i) => acc + (+curr ? x[i].toLowerCase() : x[i].toUpperCase()),
      x[0]?.slice(1),
    ),
  );
}

console.log(f4(string));
