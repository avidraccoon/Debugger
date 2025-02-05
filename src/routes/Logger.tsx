import { useState } from 'react'
import {useEntry} from "@frc-web-components/react";
import {
  Typography
} from "@mui/material";
import { NavLink } from 'react-router';

function Logger() {
  const [state, setState] = useEntry("/StateMachine/State", "Not Set");


  return (
    <>
      <Typography variant="h1">
        Logs
      </Typography>
    </>
  )
}

export default Logger
