import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>OP BLACKLIST APP</h1>
      <ul>
        <il>
          <Link to="/">Home</Link>
        </il>
        <il>
          <Link to="/register">Register</Link>
        </il>
        <il>
          <Link to="/login">Login</Link>
        </il>
      </ul>
    </nav>
  );
};

export default Navbar;
