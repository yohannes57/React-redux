import axios from "axios";
import {
  FETCH_YOUTUBE_VIDEOS,
  FETCH_YOUTUBE_VIDEOS_FAILUR,
  FETCH_YOUTUBE_VIDEOS_SUCCESS,
} from "./youtubeTypes";

export const fetchYoutVideos = () => {
  return {
    type: FETCH_YOUTUBE_VIDEOS,
  };
};
const fetchYoutVideosSuccess = (videos) => {
  return {
    type: FETCH_YOUTUBE_VIDEOS_SUCCESS,
    payload: videos,
  };
};

const fetchYoutVideosFailur = (error) => {
  return {
    type: FETCH_YOUTUBE_VIDEOS_FAILUR,
    payload: error,
  };
};

export const fetchVideos = () => {
  fetchYoutVideos();
  return (dispatch) => {
    dispatch(fetchYoutVideos());
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyBz4uki8PIHsxyJuVdPZLlrHggCwMd3p6U"
      )
      .then((response) => {
        const data = response.data;
        dispatch(fetchYoutVideosSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchYoutVideosFailur(errorMsg));
      });
  };
};
// AIzaSyBz4uki8PIHsxyJuVdPZLlrHggCwMd3p6U
// "UCE_M8A5yxnLfW0KghEeajjw"
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyBz4uki8PIHsxyJuVdPZLlrHggCwMd3p6U
// https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=apple&key=AIzaSyBz4uki8PIHsxyJuVdPZLlrHggCwMd3p6U'
