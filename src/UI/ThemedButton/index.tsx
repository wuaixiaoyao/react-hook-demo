import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export interface ThemedButtonProps {
  onClick?: () => void;
}

const ThemedButton: React.FC<ThemedButtonProps> = (props) => {
  const Themes = useContext(ThemeContext);
  return (
    <button {...props} style={{ backgroundColor: Themes.background, color: 'blue' }}>
      {props.children}
    </button>
  );
};

export default ThemedButton;
