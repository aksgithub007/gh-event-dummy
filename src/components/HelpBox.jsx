import { string } from "prop-types";

import "./HelpBox.css";

function HelpBox({ title, text }) {
  console.log("HelpBox rendered with title:", title, "and text:", text);
  // console.log("HelpBox rendered with title:", title, "and text:", text);
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
