import React from "react";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div className="footer-container">
      <Grid
        style={{ justifyContent: "center" }}
        container
        spacing={4}
        data-aos="fade-up"
      >
        <Grid item>
          <Card id="footer-card" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography id="footer-heading">Important Information</Typography>
              <Typography id="footer-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vestibulum lacinia turpis, ut facilisis sapien lacinia
                eget. Cras interdum ligula elit, maximus molestie ex placerat
                non.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card id="footer-card" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography id="footer-heading">Latest News</Typography>
              <Typography id="footer-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vestibulum lacinia turpis, ut facilisis sapien lacinia
                eget. Cras interdum ligula elit, maximus molestie ex placerat
                non.
              </Typography>
              <Typography id="footer-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card id="footer-card" sx={{ maxWidth: 345 }}>
            <CardContent
              style={{
                textAlign: "center",
                color: "black",
              }}
            >
              {" "}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link "
                    href="/department"
                  >
                    Department
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link "
                    href="/doctor"
                  >
                    Doctors
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link "
                    href="/offers"
                  >
                    Offers
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      color: "white",
                      background: "#3e86c6",
                      padding: "10px",
                    }}
                    className="nav-link"
                    href="/faq"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
