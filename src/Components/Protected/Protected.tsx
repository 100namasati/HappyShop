import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protected = (props: any) => {
  let { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("token");
    if (!user) {
      Navigate("/");
    }
  }, [Navigate]);
  return (
    <div>
      <Component />
    </div>
  );
};
export const AuthProtected = (props: any) => {
  //component=<Login/>
  let { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("token");
    if (!user) {
      Navigate("/login");
    }
  }, [Navigate]);
  return (
    <div>
      <Component />
    </div>
  );
};

// export default { Protected, AuthProtected };
