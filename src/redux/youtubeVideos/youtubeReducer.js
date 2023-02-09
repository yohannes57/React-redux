import {
  FETCH_YOUTUBE_VIDEOS,
  FETCH_YOUTUBE_VIDEOS_FAILUR,
  FETCH_YOUTUBE_VIDEOS_SUCCESS,
} from "./youtubeTypes";

const initialState = {
  loading: true,
  videos: [],
  error: "",
};

const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE_VIDEOS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_YOUTUBE_VIDEOS_SUCCESS:
      return {
        loading: false,
        videos: action.payload,
        error: "",
      };
    case FETCH_YOUTUBE_VIDEOS_FAILUR:
      return {
        loading: true,
        videos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default youtubeReducer;
