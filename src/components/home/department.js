import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DepartmentOp from "../../images/ophtholomologi.jpeg";
import DepartmentCa from "../../images/cardiology.jpeg";
import DepartmentDe from "../../images/dentistry.jpeg";
import DepartmentLe from "../../images/labolatory.jpeg";
import DepartmentPe from "../../images/pedriatics.jpeg";
import DepartmentRa from "../../images/radiology.jpeg";

export default function Department() {
  return (
    <>
      <div className="department-full-page">
        <div className="department-heading-box">
          <div className="department-heading">How We Can Help You</div>
          <div className="department-para">Read More About Our Services</div>
        </div>
        <div className="department-components" data-aos="fade-up">
          <Grid id="department-grid-page" container spacing={4}>
            <Grid id="department-grid-box" item>
              <Card style={{ boxShadow: "none" }} sx={{ maxWidth: 300 }}>
                <img className="department-box-image" src={DepartmentOp} />
                <CardContent>
                  <Typography id="department-grid-box-heading" variant="body2">
                    Ophthalmology
                  </Typography>
                  <Typography
                    id="department-grid-box-para"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eleifend, orci sed egestas faucibus, leo sapien
                    laoreet massa,
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ boxShadow: "none" }} sx={{ maxWidth: 300 }}>
                <img className="department-box-image" src={DepartmentCa} />
                <CardContent>
                  <Typography id="department-grid-box-heading" variant="body2">
                    Cardiology
                  </Typography>
                  <Typography
                    id="department-grid-box-para"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eleifend, orci sed egestas faucibus, leo sapien
                    laoreet massa,
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ boxShadow: "none" }} sx={{ maxWidth: 300 }}>
                <img className="department-box-image" src={DepartmentDe} />
                <CardContent>
                  <Typography id="department-grid-box-heading" variant="body2">
                    Dentistry
                  </Typography>
                  <Typography
                    id="department-grid-box-para"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eleifend, orci sed egestas faucibus, leo sapien
                    laoreet massa,
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ boxShadow: "none" }} sx={{ maxWidth: 300 }}>
                <img className="department-box-image" src={DepartmentLe} />
                <CardContent>
                  <Typography id="department-grid-box-heading" variant="body2">
                    Laboratory
                  </Typography>
                  <Typography
                    id="department-grid-box-para"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eleifend, orci sed egestas faucibus, leo sapien
                    laoreet massa,
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ boxShadow: "none" }} sx={{ maxWidth: 300 }}>
                <img className="department-box-image" src={DepartmentPe} />
                <CardContent>
                  <Typography id="department-grid-box-heading" variant="body2">
                    Pediatrics
                  </Typography>
                  <Typography
                    id="department-grid-box-para"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eleifend, orci sed egestas faucibus, leo sapien
                    laoreet massa,
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ boxShadow: "none" }} sx={{ maxWidth: 300 }}>
                <img className="department-box-image" src={DepartmentRa} />
                <CardContent>
                  <Typography id="department-grid-box-heading" variant="body2">
                    Radiology
                  </Typography>
                  <Typography
                    id="department-grid-box-para"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eleifend, orci sed egestas faucibus, leo sapien
                    laoreet massa,
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
