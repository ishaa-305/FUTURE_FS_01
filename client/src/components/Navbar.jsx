const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="logo">My Portfolio</div>

      {/* Right side */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
