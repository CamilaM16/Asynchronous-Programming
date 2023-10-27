import { controlTime } from "./controlTime.mjs";
import { get, parse } from "./request.mjs";

const PAGE = 19;
let data = [];

function makeFilter(array) {
    data = array.reduce((acc, element)=>(
        {
            ...acc, 
            [element.name]:element
        }), {});

}


(async () => {
    await controlTime("Reduce",() => get(PAGE, makeFilter));
    // to avoid make array.find() n times;
    console.log(data["Unknown Rick"]);
    console.log(data["Vance Maximus"]);
  })();