import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectSong, toggleLike } from "../redux/actions";

const MainComponent = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hiphopSongs, setHipHopSongs] = useState([]);

  const likedSongs = useSelector((state) => state.likedSongs); // Ottieni lo stato delle canzoni con "Mi piace"
  const dispatch = useDispatch();

  const fetchSongs = async (artistName, setSongs) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName
      );
      if (response.ok) {
        let { data } = await response.json();
        setSongs(data.slice(0, 4)); // Recupera solo i primi 4 risultati
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchSongs("queen", setRockSongs); // Rock Classics
    fetchSongs("katyperry", setPopSongs); // Pop Culture
    fetchSongs("eminem", setHipHopSongs); // Hip-Hop
  }, []);

  const handleSongClick = (song) => {
    dispatch(selectSong(song)); // Invia l'azione Redux per selezionare la canzone
  };

  const handleLikeClick = (songId) => {
    dispatch(toggleLike(songId)); // Invia l'azione Redux per mettere "Mi piace" alla canzone
  };

  const albumCard = (singleSong) => (
    <Col className="text-center" key={singleSong.id}>
      <img
        className="img-fluid"
        src={singleSong.album.cover_medium}
        alt="track"
        onClick={() => handleSongClick(singleSong)}
      />
      <p>
        Track: "{singleSong.title}"<br />
        Artist: {singleSong.artist.name}
      </p>
      {/* Bottone "Mi piace" */}
      <Button
        variant={likedSongs.includes(singleSong.id) ? "success" : "outline-success"}
        onClick={() => handleLikeClick(singleSong.id)}
      >
        {likedSongs.includes(singleSong.id) ? "Liked" : "Like"}
      </Button>
    </Col>
  );

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>

      {/* Rock Classics Section */}
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rockSongs.map((song) => albumCard(song))}
            </Row>
          </div>
        </Col>
      </Row>

      {/* Pop Culture Section */}
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {popSongs.map((song) => albumCard(song))}
            </Row>
          </div>
        </Col>
      </Row>

      {/* Hip-Hop Section */}
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hiphopSongs.map((song) => albumCard(song))}
            </Row>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default MainComponent;
