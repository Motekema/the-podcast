import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import '../AppWorks.css';

const videoLinks = [
  'N7Iq9FVqlT0',
  'MR1-ITN_EhU',
  'klGcauFMkGE',
  'FC_cXM04gAI',
  't62YniCFKzo',
  '_1G3jv07kVA',
  'IXbj8TAz9Us',
  '_VVXGn8OwqU',
  '7Jib5Ep7UHQ',
  'GwIKzozNBQI',
  '8plyJwx4LDs',
  'wqGZ_OoLzDY',
  'xMJDjTUWaP4',
  '2B0EdpKzvKQ',
  '2o_K9HmBCDI',
  '5DDvWeAgpIo',
  '9MNrfoBe8Kk'
];

const itemsPerPage = 6; // Number of videos to show per page

function AppWorks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosToShow, setVideosToShow] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Calculate which videos to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVideos = videoLinks.slice(indexOfFirstItem, indexOfLastItem);

    // Set videos to display
    setVideosToShow(currentVideos);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedVideo(null); // Close modal when changing pages
  };

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const opts = {
    height: '315',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section id="videos" className="block videos-block">
      <Container fluid>
        <div className="title-holder">
          <h2>EPISODES</h2>
          <div className="subtitle">Watch Below</div>
        </div>
        <Row className="videolist">
          {videosToShow.map((videoId, index) => (
            <Col key={index} sm={4} className="video-item mb-4">
              <div className="video-wrapper">
                <div className="video-overlay" onClick={() => openModal(videoId)}>
                  <YouTube videoId={videoId} opts={opts} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination className="mt-3 justify-content-center">
          {[...Array(Math.ceil(videoLinks.length / itemsPerPage)).keys()].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>

      {/* Modal for displaying the video */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        {selectedVideo && (
          <YouTube videoId={selectedVideo} opts={opts} />
        )}
      </Modal>
    </section>
  );
}

export default AppWorks;
