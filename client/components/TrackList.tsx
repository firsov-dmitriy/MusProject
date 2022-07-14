import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { ITrack } from "../types/Track";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction={"column"}>
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
