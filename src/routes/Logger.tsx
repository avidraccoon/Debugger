import { useState } from 'react'
import {useEntry} from "@frc-web-components/react";
import {
  Button,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import { NavLink } from 'react-router';

function Logger() {
  const [state, setState] = useEntry("/StateMachine/State", "Not Set");


  return (
    <Paper elevation={5}>
      <Paper className="LoggerConfiguration" elevation={3}>
        <Typography variant="h2">
          Log Configuration
        </Typography>
      </Paper>
      <Paper className="LoggerFile" elevation={3} >
        <Stack>
          <span className="LoggerLogFileLabel" >
            <Typography variant="h4" sx={{p:2}}>
              Log File
            </Typography>
          </span>
          <Paper  elevation={3}>
            <Typography sx={
              {
                overflow: "auto",
                height: "30vh",
              }
            }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue tortor nulla, at imperdiet quam viverra vitae. Nulla et ultricies nulla, et luctus nisl. Curabitur est nulla, tempor at dolor at, ullamcorper molestie libero. Cras ut finibus lorem, at aliquam ex. Cras ac justo non augue vestibulum porta at non risus. Nam nec urna pharetra risus hendrerit facilisis. Vivamus aliquam varius tincidunt. Proin vitae ante vestibulum orci convallis cursus in eget purus. Nullam sed lectus sapien. Quisque imperdiet sit amet nisl ac sagittis. Nulla non fringilla tortor. Morbi rutrum libero mi, ut consequat mi fringilla sed. Praesent et turpis quis turpis accumsan fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt magna vitae sem finibus dapibus. Nulla volutpat tempor tincidunt.

Cras ullamcorper nisi tortor, sed luctus lectus lacinia porttitor. Sed tincidunt metus nec consequat viverra. Donec nec mauris felis. Cras pretium quis lacus a cursus. Nulla eu dapibus sem. In hac habitasse platea dictumst. Morbi vel nibh a leo mollis eleifend ac quis dolor. Morbi sed venenatis tellus, in viverra felis. Sed mollis, arcu vitae gravida sodales, ipsum augue laoreet elit, vitae dignissim odio ex eleifend risus. Quisque lacinia dapibus eleifend. Morbi et tortor ut magna lacinia condimentum id at dui.

Quisque turpis lectus, commodo quis commodo a, pretium vulputate urna. Nullam in dolor velit. Sed molestie, justo eget sollicitudin vestibulum, purus massa sodales diam, nec fermentum libero nisl at felis. Proin nulla purus, consectetur ut tincidunt vulputate, elementum eget est. Etiam posuere arcu ac faucibus porta. Proin vehicula felis et elementum malesuada. Phasellus gravida augue vel euismod placerat. Cras a massa eu urna laoreet pretium vel non libero. Pellentesque ut tellus quis est pellentesque ultrices. Aenean accumsan mattis arcu ac vulputate. Mauris sit amet dapibus nulla, et tristique elit.

In sagittis purus sit amet sem facilisis, ac tincidunt mi commodo. Proin purus elit, sagittis in rutrum eu, tincidunt in nisl. Nullam blandit porta nulla, vel dictum nisi volutpat id. Mauris in fringilla est. In pulvinar eros sapien, in placerat nulla euismod eu. In lectus turpis, suscipit id sodales non, dapibus id orci. Duis at arcu eget arcu sagittis accumsan. Aliquam arcu nibh, molestie at libero non, pharetra scelerisque purus. Sed iaculis, sapien imperdiet dapibus congue, nunc urna luctus leo, id venenatis est velit non ligula. Aliquam sollicitudin a massa vel congue. Vestibulum aliquet facilisis finibus. Integer ut turpis imperdiet, facilisis dui quis, tristique neque. In faucibus diam nec sapien elementum scelerisque. Duis lacinia quis tellus ac fermentum. Nulla a interdum leo, ut pulvinar urna.

Etiam id posuere nisl. Nulla facilisi. Donec id odio odio. Morbi rhoncus tristique turpis non tristique. Proin imperdiet eros mollis magna posuere dapibus. Fusce ac eros aliquet, cursus sapien vel, ultricies augue. Suspendisse potenti. Fusce iaculis convallis ipsum, mollis luctus purus hendrerit eget. Nulla egestas mi iaculis metus sagittis hendrerit. Donec porta eros eget arcu mattis vulputate. Vestibulum at arcu purus. Duis viverra velit eu odio fringilla suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Proin aliquam velit ultricies velit suscipit, at iaculis nisl pellentesque.
            </Typography>
            <span className="LoggerLogFileSaveButton" >
              <Button>Download File</Button>
            </span>
          </Paper>
        </Stack>
      </Paper>
    </Paper>
  )
}

export default Logger
