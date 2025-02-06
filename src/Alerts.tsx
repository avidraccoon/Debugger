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

const containerStyle = {
  minWidth: "100%"
}
const alertStyle = {
  minWidth: "100%"
}

function SucceesAlert(props, ref)  {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    // as well as your own custom props 👇🏼
    allowDownload,
    ...other
  } = props;

  return (
    <SnackbarContent ref={ref} role="info" {...other} sx={containerStyle}>
      <Alert severity='success' sx={alertStyle}>
        {message}
      </Alert>
    </SnackbarContent>
  )
}

function InfoAlert(props, ref)  {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    // as well as your own custom props 👇🏼
    allowDownload,
    ...other
  } = props;

  return (
    <SnackbarContent ref={ref} role="info" {...other} sx={containerStyle}>
      <Alert severity='info' sx={alertStyle}>
        {message}
      </Alert>
    </SnackbarContent>
  )
}

function WarningAlert(props, ref)  {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    // as well as your own custom props 👇🏼
    allowDownload,
    ...other
  } = props;

  return (
    <SnackbarContent ref={ref} role="alert" {...other} sx={containerStyle}>
      <Alert severity='warning' sx={alertStyle}>
        {message}
      </Alert>
    </SnackbarContent>
  )
}

function ErrorAlert(props, ref)  {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    // as well as your own custom props 👇🏼
    allowDownload,
    ...other
  } = props;

  return (
    <SnackbarContent ref={ref} role="alert" {...other} sx={containerStyle}>
      <Alert severity='error' sx={alertStyle}>
        {message}
      </Alert>
    </SnackbarContent>
  )
}
let enqueue;

function SettupEnqueue(){
  const { enqueueSnackbar } = useSnackbar();
  enqueue = enqueueSnackbar;
  enqueueSnackbar("Hello");
  return (
    <></>
  )
}

export function CreateAlert(message, variant){
  return enqueue(message, {variant: variant});
}

export function CreateAlertEvent(message, variant){
  return () => enqueue(message, {variant: variant});
}

export function AddAlerts({children}){
  
  return (
    <SnackbarProvider dense maxSnack={7} autoHideDuration={4000}
      Components={{
        "infoAlert": InfoAlert,
        "warningAlert": WarningAlert,
        "errorAlert": ErrorAlert,
        "successAlert": SucceesAlert
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <SettupEnqueue />
      {children}
    </SnackbarProvider>
  )
}