import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Offers() {
  return (
    <div className="offers-full-page">
      <div className="offers-header">
        <div className="offers-heading">Our Special Offers</div>
        <p className="offers-para">Start To Be Healthy Today</p>
      </div>
      <div className="offers-services-box" data-aos="fade-up">
        <Grid
          id="offers-grid"
          style={{ justifyContent: "center", alignItems: "center" }}
          container
          spacint={4}
        >
          <Grid id="offers-services-grid" style={{ width: "28%" }} item>
            <Card id="offers-card1" sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography
                  id="offers-written1"
                  variant="body2"
                  color="text.secondary"
                >
                  Allergy Check
                </Typography>
                <Typography
                  id="offers-written2"
                  variant="body2"
                  color="text.secondary"
                >
                  $ 255
                </Typography>
                <Typography
                  id="offers-written3"
                  variant="body2"
                  color="text.secondary"
                >
                  10 treatments
                </Typography>
                <div className="offers-written-box">
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Allergy Test
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Consultation
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Treatments
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    10 Procedures
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Test Results
                  </Typography>
                </div>
                <Button id="offers-button" variant="contained">
                  Get Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid id="offers-services-grid" style={{ width: "32%" }}>
            <Card id="offers-card2" sx={{ maxWidth: 500, height: 520 }}>
              <CardContent>
                <Typography
                  id="offers-written1"
                  variant="body2"
                  color="text.secondary"
                >
                  Eye Checkup
                </Typography>
                <Typography
                  id="offers-written2"
                  variant="body2"
                  color="text.secondary"
                >
                  $ 108
                </Typography>
                <Typography
                  id="offers-written3"
                  variant="body2"
                  color="text.secondary"
                >
                  3 treatments
                </Typography>
                <div className="offers-written-box">
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Refraction
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Retinal Examination
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    External Examination
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    9 Procedures
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Full Closure
                  </Typography>
                </div>
                <Button id="offers-button-middle" variant="contained">
                  Get Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid id="offers-services-grid" style={{ width: "28%" }}>
            <Card id="offers-card1" sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography
                  id="offers-written1"
                  variant="body2"
                  color="text.secondary"
                >
                  Dental Care
                </Typography>
                <Typography
                  id="offers-written2"
                  variant="body2"
                  color="text.secondary"
                >
                  $ 320
                </Typography>
                <Typography
                  id="offers-written3"
                  variant="body2"
                  color="text.secondary"
                >
                  6 treatments
                </Typography>
                <div className="offers-written-box">
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Gum Care
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Consultation
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Treatments
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    6 Procedures
                  </Typography>
                  <Typography
                    id="offers-written4"
                    variant="body2"
                    color="text.secondary"
                  >
                    Full Closure
                  </Typography>
                </div>
                <Button id="offers-button" variant="contained">
                  Get Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
