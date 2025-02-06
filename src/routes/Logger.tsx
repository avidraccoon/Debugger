import { useEffect, useState } from 'react'
import {useEntry} from "@frc-web-components/react";
import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { NavLink } from 'react-router';
import { CreateAlert } from '../Alerts';
import { closeSnackbar } from 'notistack';
const Grid = Grid2;


function Logger() {

  function startDownload(){
    const time = Math.random()*3000;
    const id = CreateAlert("Files Started Downloading", "infoAlert");
    setTimeout(() => downloadFinished(id), time);
  }

  function downloadFinished(id){
    CreateAlert("Files Finished Downloading", "successAlert");
    closeSnackbar(id);
  }

  return (
    <Box padding={1} sx={
      {
        paddingLeft: 5,
        paddingRight: 3
      }
    }>
      <Typography variant="h2">
        Log Configuration
      </Typography>
      <Divider sx={{
          margin: 2
        }}/>
      <Stack spacing={3} direction="row">
        <TextField label="Github Repo" defaultValue={"team401/Coppercore"}/>
        <TextField label="Branch or Commit" defaultValue={"quickfix-statemachine"}/>
        <InputLabel id="DebugLevelLabel">Debug Level</InputLabel>
        <Select labelId="DebugLevelLabel"
        label="Debug Level">
          <MenuItem value={1}>(1)Version Info</MenuItem>
          <MenuItem value={2}>(2)Structure Info</MenuItem>
          <MenuItem value={3}>(3)Basic Info</MenuItem>
          <MenuItem value={4}>(4)Most Info</MenuItem>
          <MenuItem value={5}>(5)All Info</MenuItem>
        </Select>
        <InputLabel id="ProblemTypeLabel">Problem Type</InputLabel>
        <Select labelId="ProblemTypeLabel"
        label="Problem Type"
          >
          <MenuItem value={1}>
            <Tooltip title="Recomended Minimum Debug Level (2)" disableInteractive>
              <Typography>
                Configuring State Machine
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={2}>
            <Tooltip title="Recomended Minimum Debug Level (4)" disableInteractive>
              <Typography>
                Not running transition action
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={3}>
            <Tooltip title="Recomended Minimum Debug Level (3)" disableInteractive>
              <Typography>
                Not transtioning to state
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={4}>
            <Tooltip title="Recomended Minimum Debug Level (3)" disableInteractive>
              <Typography>
                Other
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={5}>
            <Tooltip title="Recomended Minimum Debug Level (3)" disableInteractive>
              <Typography>
                Wrong transition
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={6}>
            <Tooltip title="Recomended Minimum Debug Level (5)" disableInteractive>
              <Typography>
                Crashing
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={7}>
            <Tooltip title="Recomended Minimum Debug Level (1)" disableInteractive>
              <Typography>
                Don't know how to do something
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={8}>
            <Tooltip title="Recomended Minimum Debug Level (1)" disableInteractive>
              <Typography>
                None
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={9}>
            <Tooltip title="Recomended Minimum Debug Level (3)" disableInteractive>
              <Typography>
                Unwanted Behavior
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem value={10}>
            <Tooltip title="Recomended Minimum Debug Level (3)" disableInteractive>
              <Typography>
                Can't do something
              </Typography>
            </Tooltip>
          </MenuItem>
        </Select>
        <br/>
        <TextField
        placeholder="MultiLine with rows: 2 and rowsMax: 4"
        multiline
        rows={6}
      />
      </Stack>
      <Divider sx={{
          margin: 2
        }}/>
      <span className="LoggerLogFileLabel" >
        <Typography variant="h4" sx={{p:2}}>
          Log File
        </Typography>
      </span>
        <Typography sx={
          {
            overflow: "auto",
            height: "30vh",
          }
        }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue tortor nulla, at imperdiet quam viverra vitae. Nulla et ultricies nulla, et luctus nisl. Curabitur est nulla, tempor at dolor at, ullamcorper molestie libero. Cras ut finibus lorem, at aliquam ex. Cras ac justo non augue vestibulum porta at non risus. Nam nec urna pharetra risus hendrerit facilisis. Vivamus aliquam varius tincidunt. Proin vitae ante vestibulum orci convallis cursus in eget purus. Nullam sed lectus sapien. Quisque imperdiet sit amet nisl ac sagittis. Nulla non fringilla tortor. Morbi rutrum libero mi, ut consequat mi fringilla sed. Praesent et turpis quis turpis accumsan fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt magna vitae sem finibus dapibus. Nulla volutpat tempor tincidunt.

Cras ullamcorper nisi tortor, sed luctus lectus lacinia porttitor. Sed tincidunt metus nec consequat viverra. Donec nec mauris felis. Cras pretium quis lacus a cursus. Nulla eu dapibus sem. In hac habitasse platea dictumst. Morbi vel nibh a leo mollis eleifend ac quis dolor. Morbi sed venenatis tellus, in viverra felis. Sed mollis, arcu vitae gravida sodales, ipsum augue laoreet elit, vitae dignissim odio ex eleifend risus. Quisque lacinia dapibus eleifend. Morbi et tortor ut magna lacinia condimentum id at dui.

Etiam id posuere nisl. Nulla facilisi. Donec id odio odio. Morbi rhoncus tristique turpis non tristique. Proin imperdiet eros mollis magna posuere dapibus. Fusce ac eros aliquet, cursus sapien vel, ultricies augue. Suspendisse potenti. Fusce iaculis convallis ipsum, mollis luctus purus hendrerit eget. Nulla egestas mi iaculis metus sagittis hendrerit. Donec porta eros eget arcu mattis vulputate. Vestibulum at arcu purus. Duis viverra velit eu odio fringilla suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Proin aliquam velit ultricies velit suscipit, at iaculis nisl pellentesque.
        </Typography>
        <Divider sx={{
          margin: 2
        }}/>
        <span className="LoggerLogFileSaveButton" >
          <Button variant="outlined" onClick={startDownload}>Download File</Button>
        </span>
    </Box>
  )
}

export default Logger
