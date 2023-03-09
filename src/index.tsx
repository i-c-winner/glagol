import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store'
import {Provider} from "react-redux";
import StartPage from "./pages/StartPage";
import Room from "./pages/Room";
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material";
import theme from "./UI/theme/createTheme";
const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage/>
  },
  {
    path: '/:room',
    element: <Room />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
