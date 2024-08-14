

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="tabs tabs-boxed">
      <NavLink to="/" className={({ isActive }) => isActive ? "tab tab-active" : "tab"}>All</NavLink>
      <NavLink to="/fullstack" className={({ isActive }) => isActive ? "tab tab-active" : "tab"}>Full Stack Development</NavLink>
      <NavLink to="/datascience" className={({ isActive }) => isActive ? "tab tab-active" : "tab"}>Data Science</NavLink>
      <NavLink to="/cybersecurity" className={({ isActive }) => isActive ? "tab tab-active" : "tab"}>Cyber Security</NavLink>
      {/* <NavLink to="/career" className={({ isActive }) => isActive ? "tab tab-active" : "tab"}>Career</NavLink> */}
    </div>
  );
};

export default Navigation;





