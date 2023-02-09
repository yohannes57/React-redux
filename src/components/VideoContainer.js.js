import React, { useEffect } from "react";
import { fetchVideos } from "../redux";
import { connect } from "react-redux";

function VideoContainer({ fetchVideos, videosData }) {
  useEffect(() => {
    fetchVideos();
  }, []);
  return videosData.loading ? (
    <h2>loading</h2>
  ) : videosData.error ? (
    <h2>{videosData.error}</h2>
  ) : (
    <div>
      <h2>Youtube Latest videos </h2>
      <div>
        {videosData &&
          videosData.data &&
          videosData.data.map((video) => <p>{video.snippet.title}</p>)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    videosData: state.videos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);
