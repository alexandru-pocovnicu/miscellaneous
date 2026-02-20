const whosOnline = (friends) => {
  let obj = {};
  ;
  for (let elem of friends) {
    if (elem.status === "online" && elem.lastActivity <= 10) {
      if(!obj.online){
        obj.online=[]
      }
      obj.online.push(elem.username)
    }
    if (elem.status === "online" && elem.lastActivity > 10) {
      if(!obj.away){
        obj.away=[]
      }
      obj.away.push(elem.username)
    }
    if (elem.status === "offline") {
       if (!obj.offline) {
         obj.offline = [];
       }
       obj.offline.push(elem.username);
    }
  }
  
  return obj;
};
console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ]),
);
