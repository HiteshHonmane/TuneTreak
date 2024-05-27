import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { configureStore } from '@reduxjs/toolkit';


export const DeezerApi = createApi({
    reducerPath: 'DeezerApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '2f8ec1fc40msh87d5856848d2f52p1b7503jsne20b9ce85403');
        headers.set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');
        return headers;
      }
    }),
    endpoints: (builder) => ({
      getArtistAlbum: builder.query({
        query: ()=>'/charts/world',
      }),
    })
});
export const {
  useGetArtistAlbumQuery,
} = DeezerApi