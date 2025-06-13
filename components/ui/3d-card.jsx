import React, { createContext, useRef, useState, useContext } from "react";

const CardContext = createContext(null);

export const CardContainer = ({ children, className }) => {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className={`[perspective:1000px] ${className}`}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setRotate({ x: y * 15, y: x * 15 });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <CardContext.Provider value={rotate}>{children}</CardContext.Provider>
    </div>
  );
};

export const CardBody = ({ children, className }) => {
  const rotate = useContext(CardContext);
  return (
    <div
      className={className}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({ children, translateZ = 0, className, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
