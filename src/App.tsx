import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEntry} from "@frc-web-components/react";
import {
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead, TableRow,
  Typography
} from "@mui/material";


//TODO make use state
const eventHistory = [];
let lastEvent = "None";
let lastState = "Unset";
function updateHistory(event: string, state: string){
  if (lastState == "Unset"){
    lastState = state;
  }
  if (event != lastEvent){
    lastEvent = event;
    eventHistory.push(
      {
        start: lastState,
        event: event,
        end: state,
      }
    );
  }
  if (state != lastState){
    lastState = state;
  }
}

function ListCreator({items, itemToElement}): Element {


  return (
    <List>
      {
        items.map((item, index) => {
          return (
            <ListItem key={index}>
              {itemToElement(item, index)}
            </ListItem>
          )
        })
      }
    </List>
  )
}

function App() {
  const [state, setState] = useEntry("/StateMachine/State", lastState);
  const [event, setEvent] = useEntry("/StateMachine/Event", lastEvent);


  updateHistory(event, state);


  return (
    <>
      <Typography variant="h1">
        Current State: {state}
      </Typography>
      <Typography variant="h2">
        Last Event: {event}
      </Typography>
      <Typography variant="h2">
        History
      </Typography>
      <Divider />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Start State</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>End State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              eventHistory.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.start}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.start}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.event}
                      </TableCell>
                    </TableRow>
                  )
                })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
