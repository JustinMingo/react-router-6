import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is the home page.</p>
      <Link to="/about">Go to the About page!</Link>
      <br />
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
};

export default HomePage;
