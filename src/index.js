import React from 'react'
import App from './App'
// import reportWebVitals from './reportWebVitals';
// import '../node_modules/normalize.css'
import "normalize.css"
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'


// From react 18 we should use createRoot instead of ReactDOM
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter>
  <App />
</BrowserRouter>);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
