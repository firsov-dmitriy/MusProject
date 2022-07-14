import { Container, Step, StepLabel, Stepper, Grid, Card } from "@mui/material";
import React, { FC, ReactElement } from "react";

interface StepWrapperProps {
  activeStep: number;
  children?: ReactElement | ReactElement[];
}
const steps = ["Информация о треке", "Загрузите обложку", "Загрузите сам трек"];
const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        sx={{ margin: "70px 0", height: 270 }}
        container
        justifyContent={"center"}
      >
        <Card sx={{ width: "600px" }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
