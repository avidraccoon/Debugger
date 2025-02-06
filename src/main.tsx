import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {NT4Provider} from "@frc-web-components/react";
import {BrowserRouter, Route, Routes} from "react-router";
import { Box } from '@mui/material';
import { AddAlerts } from './Alerts.tsx';



const testing: boolean = true;

const address: string = (testing)? "localhost" : "10.4.1.2";

createRoot(document.getElementById('root')!).render(
  <AddAlerts>
    <StrictMode>
      <NT4Provider address={address}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NT4Provider>
    </StrictMode>
  </AddAlerts>,
)
