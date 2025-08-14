
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global'
import {RouterProvider} from 'react-router-dom'
import router from './routes/router';
import {PostProvider} from './context/PostContext';


function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </ThemeProvider>
  );
}

export default App;
