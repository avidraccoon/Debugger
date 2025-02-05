import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {NT4Provider} from "@frc-web-components/react";
import {BrowserRouter, Route, Routes} from "react-router";
import Dashboard from "./routes/Dashboard.tsx";

const testing: boolean = true;

const address: string = (testing)? "localhost" : "10.4.1.2";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NT4Provider address={address}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <App />
          }/>
          <Route path="contacts" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </NT4Provider>
  </StrictMode>,
)
