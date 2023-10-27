import { controlTime } from "./controlTime.mjs";
import { get, parse } from "./request.mjs";

const PAGE = 19;

function listRiksForEach(array) {
  array.forEach((element) => {
    parse(element);
  });
}

function listRiksFor(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    parse(element);
  }
}

function listRiksMap(array) {
  // return a new array
  array.map((element) => parse(element));
}

(async () => {
  await controlTime("Map",() => get(PAGE, listRiksMap));
  await controlTime("For",() => get(PAGE, listRiksFor));
  await controlTime("ForEach",() => get(PAGE, listRiksForEach));
})();
