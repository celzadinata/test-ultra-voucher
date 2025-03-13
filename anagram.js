function sorting(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

function splitToArray(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    result[i] = input[i];
  }
  return sorting(result);
}

function removeDuplicate(input) {
  const result = [];
  let index = 0;
  const temp = {};

  for (let i = 0; i < input.length; i++) {
    if (!temp[input[i]]) {
      temp[input[i]] = 1;
      result[index] = input[i];
      index++;
    }
  }
  return result;
}

function anagram(input) {
  let arrTemp = [];
  let result = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (splitToArray(input[i]).toString() == splitToArray(input[j]).toString()) {
        arrTemp[i] = arrTemp[i] + input[j] + ", ";
      }
    }
    arrTemp[i] = arrTemp[i].replace("undefined", "").trim();

    let stringTemp = "";
    for (let j = 0; j < arrTemp[i].length - 1; j++) {
      stringTemp += arrTemp[i][j];
    }

    arrTemp[i] = stringTemp;
  }

  for (let i = 0; i < arrTemp.length; i++) {
    result[i] = [arrTemp[i]];
  }

  return removeDuplicate(result);
}

let input = ["cook", "save", "taste", "aves", "vase", "state", "map"];
const result = anagram(input);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
