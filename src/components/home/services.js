import React from "react";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import Typography from "@mui/material/Typography";
import ServicesImage from "../../images/jeveline-icon.png";

export default function Services() {
  return (
    <div>
      <div className="common-container" data-aos="fade-up">
        <div className="common-top">
          <div className="common-top-heading">
            Professional
            <br />
            Family Health Care
          </div>
          <div className="common-top-para">
            Create Your Medical Website Using Jevelin
          </div>
          <img className="common-top-image" src={ServicesImage} />
        </div>
      </div>
      <div className="common-services-title">Company Services</div>
      <Grid
        style={{ justifyContent: "center" }}
        container
        spacing={4}
        data-aos="fade-up"
      >
        <Grid item>
          <Card id="Emergency-services" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography id="service-card-top">1-800-600-380</Typography>
              <Typography id="service-card-top-heading">
                Emergency Serivice
              </Typography>
              <Typography id="services-para">
                Aliquam erat volutpat. Nullam imperdiet sapien felis, non
                lobortis odio mattis in. Quisque dapibus aliquet dictum. Integer
                dapibus ullamcorper est, ac .
              </Typography>
              <Button href="/" id="services-button" variant="contained">
                See More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card id="appointment" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography>
                <CalendarTodayIcon
                  style={{ fontSize: "2.5rem", color: "#3e86c6" }}
                />
              </Typography>
              <Typography id="service-card-top-heading">Appointment</Typography>
              <Typography id="services-para">
                Aliquam erat volutpat. Nullam imperdiet sapien felis, non
                lobortis odio mattis in. Quisque dapibus aliquet dictum.
              </Typography>
              <Button href="/" id="services-button" variant="contained">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card id="opening-hours" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography>
                <AccessAlarmsIcon
                  style={{ fontSize: "2.5rem", color: "#3e86c6" }}
                />
              </Typography>
              <Typography id="service-card-top-heading">
                Opening Hours
              </Typography>
              <Typography id="opening-hours-time">Monday - Friday</Typography>
              <Typography id="services-para">
                Aliquam erat volutpat. Nullam imperdiet sapien felis, non
                lobortis odio mattis in. Quisque dapibus aliquet dictum.
              </Typography>
              <Button href="/" id="services-button" variant="contained">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
