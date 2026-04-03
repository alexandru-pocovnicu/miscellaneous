const cannonsReady = (gunners) => {
return Object.values(gunners).every((value) => value === "aye") ? 'Fire!':'Shiver me timbers'
};
console.log(
  cannonsReady({ Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "nay" }),
);
