import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEntry} from "@frc-web-components/react";
import {
  Box,
  Button,
  Paper,
  Typography
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Dashboard from "./routes/Dashboard.tsx";
import Logger from "./routes/Logger.tsx";
import Nav from './Nav.tsx';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="dash" element={<Dashboard />}/>
        <Route path="logs" element={<Logger />}/>
      </Routes>
      <Link to="/dash"></Link>
    </>
  )
}

export default App
