import { Button, Card, Grid, Box } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";
import StepWrapper from "../../components/StepWrapper";

const create = () => {
  return (
    <Layout>
      <StepWrapper activeStep={3}>
        <h1>Загрузка трека</h1>
      </StepWrapper>
    </Layout>
  );
};

export default create;
