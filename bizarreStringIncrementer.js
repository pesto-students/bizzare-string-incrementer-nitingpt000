// Start your implementation here

export function bizarreStringIncrementer(str) {
  let finalString;
  let regex = str.search(/(\d{1,})+$/);
  let startString;
  if (regex === -1) {
    finalString = str + '1';
    startString = '';
  } else {
    let temp = parseInt(str.slice(regex));
    startString = str.slice(0, regex);
    finalString = temp + 1;
  }

  return startString + finalString;

}
