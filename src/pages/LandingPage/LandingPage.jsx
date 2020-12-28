import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import backgroundImage from "../../assets/images/backgroundLogin.png";
import paperLogo from "../../assets/images/paperlogowhite.svg";
import { Box } from "@material-ui/core";

const LandingPage = () => {
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ background: "#6FA0CD" }}>
      <img
        style={{
          position: "absolute",
          zIndex: "0",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        src={backgroundImage}
        alt="an astronaut pic"
      />
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            direction="column"
            justify="center"
            style={{ height: "100vh" }}
          >
            <Grid item xs={12} sm={6}>
              <Box
                textAlign="center"
                fontWeight="fontWeightMedium"
                fontSize={38}
                style={{ marginBottom: "6px", color: "#fff" }}
              >
                Masuk ke Paper.id
              </Box>

              <Box
                textAlign="center"
                fontWeight="fontWeightLight"
                fontSize={16}
                style={{ marginBottom: "6px", color: "#fff" }}
              >
                masuk dengan akun yang terdaftar di Paper.id/PayPer
              </Box>

              <Grid
                container
                spacing={1}
                style={{ marginTop: "20px" }}
                alignItems="flex-end"
              >
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={handleChange}
                    id="input-with-icon-grid"
                    label="Email"
                    style={{ width: "280px" }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                style={{ marginTop: "20px" }}
                spacing={1}
                alignItems="flex-end"
              >
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={handleChange}
                    id="input-with-icon-grid"
                    label="Kata Sandi"
                    style={{ width: "280px" }}
                  />
                </Grid>
              </Grid>
              <Button
                style={{
                  background: "#93C854",
                  color: "#fff",
                  width: "100%",
                  borderRadius: "20px",
                  textTransform: "none",
                  marginTop: "51px",
                }}
              >
                Masuk
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-end"
          >
            <img
              src={paperLogo}
              alt="paper's logo"
              style={{
                marginTop: "33px",
                marginRight: "63px",
                maxWidth: "214px",
                maxHeight: "67.7px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
