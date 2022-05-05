import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import DoctorImage from "../../images/doctor.jpeg";

export default function Doctor() {
  return (
    <div data-aos="fade-up">
      <Grid id="about-grid-container" container spacing={4}>
        <Grid id="about-grid-box" item>
          <Card id="about-grid-card" sx={{ maxWidth: 400 }}>
            <h1 className="about-title">
              <span className="about-title-about">Jenna</span> Berg
            </h1>
            <div className="about-heading">Professional Dentist</div>
            <div className="about-para2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum
              sem
            </div>
            <div className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum
              sem non sapien condimentum aliquet. Nulla facilisi. Mauris
              efficitur dolor dolor, id porta nulla interdum vitae.
            </div>
            <Button id="department-button" variant="contained">
              View All Doctor
            </Button>
          </Card>
        </Grid>
        <Grid id="about-grid-box" item>
          <Card id="about-grid-card" sx={{ maxWidth: 600 }}>
            <CardContent>
              <img className="about-image" src={DoctorImage} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
