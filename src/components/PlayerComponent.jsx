import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import shuffleIcon from '../assets/images/playerbuttons/shuffle.png';
import prevIcon from '../assets/images/playerbuttons/prev.png';
import playIcon from '../assets/images/playerbuttons/play.png';
import nextIcon from '../assets/images/playerbuttons/next.png';
import repeatIcon from '../assets/images/playerbuttons/repeat.png';

const PlayerComponent = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between">
                <a href="#"><img src={shuffleIcon} alt="shuffle" className="img-fluid" /></a>
                <a href="#"><img src={prevIcon} alt="prev" className="img-fluid" /></a>
                <a href="#"><img src={playIcon} alt="play" className="img-fluid" /></a>
                <a href="#"><img src={nextIcon} alt="next" className="img-fluid" /></a>
                <a href="#"><img src={repeatIcon} alt="repeat" className="img-fluid" /></a>
              </div>
              <div className="song-details mt-3" style={{ color: 'white' }}>
                {selectedSong ? (
                  <>
                    <p>Artist: {selectedSong.artist.name}</p>
                    <p>Track: {selectedSong.title}</p>
                    <img src={selectedSong.album.cover_medium} alt="album cover" className="img-fluid" />
                  </>
                ) : (
                  <p>No song selected</p>
                )}
              </div>
              <ProgressBar className="mt-3" now={50} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerComponent;
