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

export default function Faq() {
  return (
    <div className="faq-container" data-aos="fade-up">
      <Grid id="about-grid-container" container spacing={4}>
        <Grid id="about-grid-box" item>
          <Card id="about-grid-card" sx={{ maxWidth: 600 }}>
            <CardContent>
              <h1 className="about-title">
                {" "}
                Frequently Asked
                <br />
                <span className="about-title-about">Question</span>
              </h1>
              <div className="about-heading">Professional Care</div>
              <div className="about-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum
                sem non sapien condimentum aliquet. Nulla facilisi. Mauris
                efficitur dolor dolor, id porta nulla interdum vitae.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid id="about-grid-box" item>
          <Card id="about-grid-card" sx={{ maxWidth: 400 }}>
            <Accordion id="about-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontFamily: "montserrat" }}>
                  How to make an appointment?
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
                  What will my insurance cover for me?
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
                  Is there a parking place next to the clinic?
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
                  How can i make a home apointment?
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
