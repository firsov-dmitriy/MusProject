import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Typography align={"center"}>
        <h1>Добро пожаловать!</h1>
        <h3>Здесь собраны лучше треки!</h3>
      </Typography>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
