import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"; // call to react-router-dom function
import { ChakraProvider } from "@chakra-ui/react" // call to chakraProvide to create styles
import App from './App';

// envolve the react app with react-router-dom and chakra ui
ReactDOM.render(
  <React.StrictMode> 
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
