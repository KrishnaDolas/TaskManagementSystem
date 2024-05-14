import MiniDrawer from "./MiniDrawer";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import totaltaskicon from "../assets/totaltaskicon.jpg";
import todoicon from "../assets/todoicon.jpg";
import taskinprogressicon from "../assets/taskinprogressicon.jpg";
import complitedtask from "../assets/complitedtask.jpg";
import Tasktable from "./Tasktable";
import Userstable from "./Userstable";

function Dashboard() {
  const theme = useTheme();

  return (
    <MiniDrawer>
      <div class="container text-center" style={{marginTop:"20%"}}>
        <div class="row">
          <div class="col">
            <Card sx={{ display: "flex", height: "150px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    TOTAL TASK
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    10
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <p>110 last month</p>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 50, height: 75, marginTop: "30px" }}
                image={totaltaskicon}
                alt="Live from space album cover"
              />
            </Card>
          </div>

          <div class="col">
            <Card sx={{ display: "flex", height: "150px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    TASK DONE
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    1
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <p>110 last month</p>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 50, height: 75, marginTop: "30px" }}
                image={complitedtask}
                alt="Live from space album cover"
              />
            </Card>
          </div>

          <div class="col">
            <Card sx={{ display: "flex", height: "150px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    TASK IN PROGRESS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    3
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <p>110 last month</p>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 50, height: 75, marginTop: "30px" }}
                image={taskinprogressicon}
                alt="Live from space album cover"
              />
            </Card>
          </div>

          <div class="col">
            <Card sx={{ display: "flex", height: "150px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    TODOS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    6
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <p>110 last month</p>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 50, height: 75, marginTop: "30px" }}
                image={todoicon}
                alt="Live from space album cover"
              />
            </Card>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <Tasktable />
            </div>
            <div class="col">
              <Userstable />
            </div>
          </div>
        </div>
      </div>
    </MiniDrawer>
  );
}

export default Dashboard;
