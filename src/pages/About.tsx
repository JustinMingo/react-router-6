import React from "react";
import { useNavigate } from "react-router-dom";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is the about page.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default AboutPage;
