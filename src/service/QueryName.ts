function getRandomArbitrary() {
  let first = Math.round(Math.random() * (28 - 10) + 10);
  let second = Math.round(Math.random() * (12 - 10) + 10);
  console.log("" + first + second);

  return '' + first + second;
}

async function QueryNames() {
  const response = await fetch(
    "https://svatky.adresa.info/json?date=" + getRandomArbitrary()
  );
  return response.json();
}

export default QueryNames;
