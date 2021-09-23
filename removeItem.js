// const names = ["Tumisang", "Samuel", "Muano"];
// const removeItems = (list, itemName) => {
//   let newRemoveList = [];

//   for (let i in list) {
//     if (list[i] !== itemName) {
//       newRemoveList.push(list[i]);
//     }
//   }
//   return newRemoveList;
// };

// console.log(removeItems(names, "Tumisang"));




const names = ["Tumisang", "Samuel", "Muano"];
const removeItems = (list, itemName) => {

return list.filter(item => item !== itemName)


    }

console.log(removeItems(names, "Tumisang"));