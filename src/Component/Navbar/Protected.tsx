const Protected = () => {
  let isLoggedIn = false;
  let user = localStorage.getItem("token");
  if (!user) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }
  return isLoggedIn;
};

export default Protected;
