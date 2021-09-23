import Routes from '@routes/index';
import NormalizeGlobalStyle from '@/styles/normalize';
import { ThemeProvider } from 'styled-components';
import { defaultTheme }  from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NormalizeGlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
