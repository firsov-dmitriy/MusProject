import { Card, Grid, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import { ITrack } from "../types/Track";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = true }) => {
  const router = useRouter();
  return (
    <Card
      className={styles.track}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid
        sx={{ width: 200, margin: "0 20px" }}
        container
        direction={"column"}
      >
        <Typography variant="h6" component={"div"}>
          {track.name}
        </Typography>
        <Typography variant="subtitle1" color={"grey"} component={"div"}>
          {track.artist}
        </Typography>
      </Grid>
      {active && <div>02:42/03:22</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        sx={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
