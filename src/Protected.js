import React from "react";
import { Navigate } from "react-router-dom";
function Protected({ isUserAvailable, children }) {
  if (!isUserAvailable) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default Protected;
