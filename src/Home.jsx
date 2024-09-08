import React, { useEffect } from 'react';
import './App.css';
function Home() {
useEffect(() => {
const link = document.createElement('link');
link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
link.rel = 'stylesheet';
document.head.appendChild(link);
return () => {
document.head.removeChild(link);
};
}, []);
return (
<section className="home">
<div className="home-content">
<h1>Hello I'm Soniya Sadasivam</h1>
<h3>Aspiring Full-Stack Developer</h3>
<div className="home-sci">
<a href="#"><i className='bx bxl-github'></i></a>
<a href="#"><i className='bx bxl-linkedin'></i></a>
</div>
<a href="#" className="btn">Download CV</a>
</div>
</section>
);
}
export default Home;