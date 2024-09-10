import NavItem from './NavItem';
import NavIcons from './NavIcons';

const Navbar = ({ links, logo }) => {
  return (
    <nav className="navigation">
      <div className="container d-flex a-center">

        <img src={logo} alt="logo" />

        {/* Dynamic Navigation Links */}
        <ul className="d-flex j-center">
          {links.map((link) => (
            <NavItem key={link.name} to={link.to} name={link.name} />
          ))}
        </ul>

        <NavIcons />
      </div>
    </nav>
  );
};

export default Navbar;
