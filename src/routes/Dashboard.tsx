import { useState } from 'react'
import {useEntry} from "@frc-web-components/react";
import {
  Button,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Grid = Grid2;
function Dashboard() {
  const [state, setState] = useEntry("/StateMachine/State", "Not Set");


  return (
    <Paper elevation={5} sx={{p: 1}}>
      <Typography variant="h1">
        Dashboard
      </Typography>
      <Grid container spacing={2} sx={{margin: 1}}>
        <Grid size={6}>
          <Paper elevation={3}>
            <Typography variant="h3">
              Current State
            </Typography>
            <Typography variant="h6">
              {"State here"}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper elevation={3}>
            <Typography variant="h3">
              Last Trigger
            </Typography>
            <Typography variant="h6">
              {"Trigger here"}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={4}>
          <Paper elevation={3}>
            <Typography variant="h3">
              Actions
            </Typography>
            <Divider  variant="middle"/>
            <List style={{maxHeight: "95vh-10px", overflow: 'auto'}}>
              <ListItem>
                <ListItemButton>
                  <ListItemText>
                    Action 1 (Force fire event)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText>
                    Action 2 (Force fire event)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText>
                    Action 3 (Force fire event)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText>
                    Action 4 (Force fire event)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText>
                    Action 5 (Force fire event)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText>
                    Action 6 (Force fire event)
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid size={8}>
          <Paper elevation={3} sx={{minHeight: "100%"}}>
            <Typography variant="h3">
              Action Configuration
            </Typography>
            <Divider  variant="middle"/>
            <Button>
              <PlayArrowIcon />
              <Typography>
                Run Action
              </Typography>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Dashboard
