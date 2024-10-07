import { useRef, useEffect, useState } from 'react';

const MagneticButton = ({ children }) => {
  const buttonRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.8}px, ${y * 0.9}px)`;
  };

  const resetTransform = () => {
    buttonRef.current.style.transform = 'translate(0, 0)';
  };

  useEffect(() => {
    const button = buttonRef.current;

    if (isHover) {
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', resetTransform);
    } else {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', resetTransform);
    }

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', resetTransform);
    };
  }, [isHover]);

  return (
    <div
      ref={buttonRef}
      className={`relative inline-block rounded-full   font-semibold text-white  transition-all duration-300 transform`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        resetTransform();
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;