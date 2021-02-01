import React from 'react';
import { hot } from 'react-hot-loader/root';
import usePersistedState from './util/usePersistedState';

import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>
          {theme.title === 'light' ? 'LIGHT' : 'DARK'}
        </h1>
      </div>
    </ThemeProvider>
  );
};

export default hot(App);
