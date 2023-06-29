import { ScriptProps } from 'next/script';
import { FC, ReactElement } from 'react';

const DarkLayout: FC<ScriptProps> = ({ children }) => {
  return (
    <div style={style}>
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;

const style = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: '10px',
  borderRadius: '5px',
};
