import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export interface ThemedButtonProps {
  onClick?: () => void | (() => void | undefined);
}

const ThemedButton: React.FC<ThemedButtonProps> = (props) => {
  // const { theme } = useContext(ThemeContext);
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          {...props}
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background, color: 'blue' }}
        >
          {props.children}
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemedButton;
