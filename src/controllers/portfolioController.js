const DB = require('./db.js');

const getRecentActivity = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .orderBy("posted", "desc")
    .limit(8)
  .onSnapshot(querySnapshot => {
    console.log("Hello");
    var temp = [];console.log(querySnapshot.docs.length);
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    callback(temp);
  });
}

export { getRecentActivity }
