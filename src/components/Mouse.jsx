import React, { useEffect, useState } from 'react';

const Mouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMouse);
    return () => document.removeEventListener('mousemove', updateMouse);
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
  };

  return <div className="mouse-glow" style={cursorStyle}></div>;
};

export default Mouse;
