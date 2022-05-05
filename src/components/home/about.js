import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "@mui/material/Accordion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import AboutImage from "../../images/jeveline-clinic.png";

export default function About() {
  return (
    <div className="about-container" data-aos="fade-up">
      <Grid id="about-grid-container" container spacing={4}>
        <Grid id="about-grid-box" item>
          <Card id="about-grid-card" sx={{ maxWidth: 600 }}>
            <CardContent>
              <img className="about-image" src={AboutImage} />
            </CardContent>
          </Card>
        </Grid>
        <Grid id="about-grid-box" item>
          <Card id="about-grid-card" sx={{ maxWidth: 400 }}>
            <h1 className="about-title">
              <span className="about-title-about">About</span> Jevelin Clinic
            </h1>
            <div className="about-heading">Professional Care</div>
            <div className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum
              sem non sapien condimentum aliquet. Nulla facilisi. Mauris
              efficitur dolor dolor, id porta nulla interdum vitae.
            </div>
            <Accordion id="about-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontFamily: "montserrat" }}>
                  Medical Consulting
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontFamily: "montserrat" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion id="about-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ fontFamily: "montserrat" }}>
                  Labolatory Analysis
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontFamily: "montserrat" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion id="about-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ fontFamily: "montserrat" }}>
                  Diagnostic Clinic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontFamily: "montserrat" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
