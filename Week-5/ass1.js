function* range(upperbound) {
  for (let i = 0; i < upperbound; i++) {
    // calling suare functin
    square(i);
  }
}

const mult = (i) => {
  //promise will be resolved after i*1000ms
  return new Promise((resolve) => {
    setTimeout((i) => {
        resolve(i * i);
      },i * 1000,i);
  });
};

async function square(n) {
  //async await function which will wait for mult promise to resolve
  let response = await mult(n);
  console.log(response);
}

// calling generator function range for 0 to4
for (const r of range(5)) {
}
