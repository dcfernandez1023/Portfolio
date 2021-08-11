const DB = require('./db.js');

const getRecentActivity = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .orderBy("posted", "desc")
    .limit(8)
  .onSnapshot(querySnapshot => {
    var temp = [];
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
    var temp = [];
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    temp.sort((ele1, ele2) => {
      return ele2.posted - ele1.posted;
    });
    callback(temp);
  });
}

const getProject = (id, callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .where("id", "==", id)
  .onSnapshot(querySnapshot => {
    callback(querySnapshot.docs[0].data());
  });
}

const getBlogPosts = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .where("type", "==", "BLOG_POST")
  .onSnapshot(querySnapshot => {
    var temp = [];
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    temp.sort((ele1, ele2) => {
      return ele2.posted - ele1.posted;
    });
    callback(temp);
  });
}

const getExperience = (callback) => {
  const onError = (error) => {
    alert(error.message);
  };
  DB.getQuery("portfolio_data", onError)
    .where("type", "==", "EXPERIENCE")
  .onSnapshot(querySnapshot => {
    var temp = [];
    for(var i = 0; i < querySnapshot.docs.length; i++) {
      temp.push(querySnapshot.docs[i].data());
    }
    temp.sort((ele1, ele2) => {
      return ele2.posted - ele1.posted;
    });
    callback(temp);
  });
}

export { getRecentActivity, getProjects, getProject, getBlogPosts, getExperience }
