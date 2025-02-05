import { useState } from 'react'
import {useEntry} from "@frc-web-components/react";
import {
  Typography
} from "@mui/material";

function Dashboard() {
  const [state, setState] = useEntry("/StateMachine/State", "Not Set");


  return (
    <>
      <Typography variant="h1">
        Current State: {state}
      </Typography>
    </>
  )
}

export default Dashboard
