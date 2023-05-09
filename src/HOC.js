import { useNavigate, useParams, useLocation } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    let location = useLocation();
    return <Component router={{ location, navigate, params }} {...props} />;
  };

  return Wrapper;
};
