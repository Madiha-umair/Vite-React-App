import {Link} from "react-router-dom";
import Question from "./Question";

export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name">
        <Link to="/">My second React app</Link>
      </h2>
      <Question />
    </header>
  );
}