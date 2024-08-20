import React from 'react';
import './App.css';
function Header() {
return (
<header className="header">
<a href="#" className="logo">Port<span>Folio.</span></a>
<nav className="navbar">
<a href="#" >Home</a>
<a href="#">About</a>
<a href="#">Projects</a>
<a href="#">Contact</a>
</nav>
</header>
);
}
export default Header;