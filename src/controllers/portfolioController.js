const DB = require('./db.js');

const getRecentActivity = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .orderBy("posted", "desc")
    .limit(8)
  .onSnapshot(querySnapshot => {
    var temp = [];console.log(querySnapshot.docs.length);
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    callback(temp);
  });
}

const getProjects = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .where("type", "==", "PROJECT")
  .onSnapshot(querySnapshot => {
    var temp = [];console.log(querySnapshot.docs.length);
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    callback(temp);
  });
}

const getBlogPosts = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .where("type", "==", "BLOG_POST")
  .onSnapshot(querySnapshot => {
    var temp = [];console.log(querySnapshot.docs.length);
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    callback(temp);
  });
}

export { getRecentActivity, getProjects, getBlogPosts }
