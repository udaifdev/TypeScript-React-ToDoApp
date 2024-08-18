import './Header.css'; // Import the CSS file
import { useEffect, useState } from 'react';

function Header() {

  const [day, setDay] = useState('');
  useEffect(() => {
    const getCurrentDay = () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date().getDay();
      return days[today];
    };
    setDay(getCurrentDay());
  }, []);

  return (
    <>
      <h2 className='text-2xl font-bold text-black mb-2'>Whoop, it's {day}☕ </h2>
      <div className="header-container mb-8">
        <div className="header-item">Type_Script</div>
        <div className="header-divider">+</div>
        <div className="header-item">React_JS</div>
      </div>
    </>
  );
}

export default Header;
