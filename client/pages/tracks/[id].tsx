import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { useFetchOneTrackQuery } from "../../service/TrackService";

const TrackPage = () => {
  const router = useRouter();
  const _id = router.query.id as string;
  const { data: track } = useFetchOneTrackQuery({ _id });
  console.log(track);

  return (
    <Layout>
      <Button
        variant="outlined"
        sx={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container sx={{ margin: "20px 0" }}>
        <img src={track?.picture} width={200} height={200} />
        <div style={{ marginLeft: "20px" }}>
          <h1>Название трека - {track?.name}</h1>
          <h1>Исполнитель - {track?.artist}</h1>
          <h1> Прослушиваний - {track?.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track?.text}</p>
      <h1>Комминтарии</h1>
      <Grid container>
        <TextField label={"Ваше имя"} fullWidth />
        <TextField label={"Комминтарий"} fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track?.comments.map((comment) => (
          <div>
            <div> Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TrackPage;
