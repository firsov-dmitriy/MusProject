import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITrack } from "../types/Track";

export const trakcApi = createApi({
  reducerPath: "trackApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    fetchAllTracks: builder.query<ITrack[], null>({
      query: () => ({
        url: "/tracks",
      }),
    }),
    fetchOneTrack: builder.query<ITrack, { _id: string }>({
      query: ({ _id }) => ({
        url: `/tracks/${_id}`,
      }),
    }),
  }),
});

export const { useFetchAllTracksQuery, useFetchOneTrackQuery } = trakcApi;
