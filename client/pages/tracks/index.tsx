import { Grid, Card, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import TrackList from "../../components/TrackList";
import { useFetchAllTracksQuery } from "../../service/TrackService";

const index = () => {
  const router = useRouter();
  const { data: tracks } = useFetchAllTracksQuery(null);

  return (
    <Layout>
      <Grid container justifyContent={"center"}>
        <Card sx={{ width: "900px" }}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <h1>Список треков</h1>
              <Button
                onClick={() => router.push("/tracks/create")}
                color="inherit"
              >
                Загрузить
              </Button>
            </Grid>
          </Box>
          {tracks && <TrackList tracks={tracks} />}
        </Card>
      </Grid>
    </Layout>
  );
};

export default index;
