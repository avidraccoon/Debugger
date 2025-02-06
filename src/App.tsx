import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEntry} from "@frc-web-components/react";
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  SnackbarCloseReason,
  Typography
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Dashboard from "./routes/Dashboard.tsx";
import Logger from "./routes/Logger.tsx";
import Nav from './Nav.tsx';
import History from './routes/History.tsx';
import Settings from './routes/Settings.tsx';
import Configure from './routes/Configure.tsx';
import React from 'react';
import { SnackbarContent, SnackbarProvider, useSnackbar, VariantType } from 'notistack';
import { CreateAlertEvent } from './Alerts.tsx';

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="dash" element={<Dashboard />}/>
        <Route path="logs" element={<Logger />}/>
        <Route path="history" element={<History />}/>
        <Route path="settings" element={<Settings />}/>
        <Route path="configure" element={<Configure />}/>
      </Routes>
      <Button onClick={CreateAlertEvent("State Machine error", "errorAlert")}>
        Open Snackbar
      </Button>
    </>
  )
}

export default App
