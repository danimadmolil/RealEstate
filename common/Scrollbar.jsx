import React from 'react';
import ScrollArea from 'react-scrollbar';
export default function Scrollbar({ children, style = {}, ...rest }) {
  return (
    <ScrollArea
      style={{
       
        ...style,
      }}
      speed={0.8}
      className="area"
      contentClassName="content"
      horizontal={false}
      {...rest}
    >
      {children}
    </ScrollArea>
  );
}
