import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const videoLinks = [
  'https://youtu.be/N7Iq9FVqlT0',
  'https://youtu.be/MR1-ITN_EhU?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/klGcauFMkGE?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/FC_cXM04gAI?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/t62YniCFKzo?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/_1G3jv07kVA?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  // Videos for page 2
  'https://youtu.be/IXbj8TAz9Us?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/_VVXGn8OwqU?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/7Jib5Ep7UHQ?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/GwIKzozNBQI?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/8plyJwx4LDs?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  // Videos for page 3
  'https://www.youtube.com/watch?v=wqGZ_OoLzDY&list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV&index=12&pp=iAQB',
  'https://youtu.be/xMJDjTUWaP4?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/2B0EdpKzvKQ?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/2o_K9HmBCDI?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/5DDvWeAgpIo?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV',
  'https://youtu.be/9MNrfoBe8Kk?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV'
];

const itemsPerPage = 6; // Number of videos to show per page

function extractVideoId(url) {
  // Regular expression to extract video ID from YouTube URL
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match && match[1];
}

const videosData = videoLinks.map((link, index) => ({
  id: extractVideoId(link),
  title: `Video ${index + 1}`
}));

function AppWorks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosToShow, setVideosToShow] = useState([]);

  useEffect(() => {
    // Calculate which videos to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVideos = videosData.slice(indexOfFirstItem, indexOfLastItem);

    // Set videos to display
    setVideosToShow(currentVideos);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="videos" className="block videos-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Videos</h2>
          <div className="subtitle">Watch Below</div>
        </div>
        <Row className="videolist">
          {videosToShow.map(video => (
            <Col key={video.id} sm={4} className="video-item">
              <div className="video-wrapper">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                    alt={video.title}
                    fluid
                  />
                  <div className="label text-center">
                    <h3>{video.title}</h3>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination className="mt-3">
          {[...Array(Math.ceil(videosData.length / itemsPerPage)).keys()].map(number => (
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
    </section>
  );
}

export default AppWorks;
