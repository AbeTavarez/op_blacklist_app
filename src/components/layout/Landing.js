import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
      <h1>OP BLACKLIST APP</h1>

      <p>Create an account to get started</p>

      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </section>
  );
};

export default Landing;
