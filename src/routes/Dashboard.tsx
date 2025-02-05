import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEntry} from "@frc-web-components/react";
import {
  Typography
} from "@mui/material";

function Dashboard() {
  const [state, setState] = useEntry("/StateMachine/State", lastState);
  const [event, setEvent] = useEntry("/StateMachine/Event", lastEvent);


  return (
    <>
      <Typography variant="h1">
        Current State: {state}
      </Typography>
    </>
  )
}

export default Dashboard
