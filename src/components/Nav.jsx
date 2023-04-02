import {NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Main navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
    </nav>
  );
}