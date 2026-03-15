function playerManager(players) {
  if (players === null || players.length === 0) return [];
  let arr1 = players.split(",");
  let arrOfObj = [];
  let arr = arr1.map((x) => x.trim());

  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    if (Number.isNaN(parseInt(arr[i]))) {
      obj.player = arr[i];
      obj.contact = +arr[i + 1];
      arrOfObj.push(obj);
    }
  }
  return arrOfObj;
}
console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));
