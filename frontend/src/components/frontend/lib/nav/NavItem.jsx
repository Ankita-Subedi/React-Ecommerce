import { NavLink } from 'react-router-dom';

const NavItem = ({ to, name }) => {
  return (
    <NavLink to={to} className="nav-item">
      <p>{name}</p>
      <hr className="border-black" />
    </NavLink>
  );
};

export default NavItem;