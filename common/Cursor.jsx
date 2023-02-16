import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled, Avatar, Menu, IconButton } from '@mui/material';

const Circle = styled('div', { shouldForwardProp: () => true })(
  ({ theme, ...props }) => {
    console.log({ theme, props });
    return {
      width: '25px',
      height: '25px',
      backgroundColor: 'black',
      borderRadius: '25px',
      transition: 'transform 0.15s ease-out',
      position: 'fixed',
      zIndex: 9999,
      transform: `translate(${props?.x}px,${props?.y}px)`,
    };
  }
);

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const onMousemove = useCallback(function onMousemove(e) {
    setPosition({ x: e.pageX, y: e.pageY });
  }, []);
  useEffect(() => {
    ref.current.style.transform = `translate(${position.x}px,${position.y}px)`;
  }, [position.x, position.y]);
  console.log(onMousemove);
  useEffect(() => {
    window.addEventListener('mousemove', onMousemove);
    return () => {
      window.removeEventListener('mousemove', onMousemove);
    };
  }, []);
  return <Circle ref={ref} />;
}
