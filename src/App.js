import './App.css';

import { Home } from './pages/home';

import { Navbar, Footer } from './components';

import { Container, ThemeProvider, createTheme } from '@mui/material';

import { motion } from 'framer-motion';

const theme = createTheme({
  palette:{
    primary:{
      main:'#FDC435',
      contrastText:'#333333'
    },
    secondary:{
      main:'#333333'
    },
    
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
          <Container maxWidth={'lg'}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
                      <Home/>
            </motion.div>
          </Container>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
