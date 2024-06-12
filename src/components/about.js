import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about Fam Life</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>The L-Tido podcast is a popular podcast show hosted by L-Tido, a well-known South African hip-hop artist. In this podcast, L-
              Tido shares his views on various topics such as the music industry, entertainment, and lifestyle. 
              
              He also invites guests from the music industry and beyond to discuss their experiences and share their insights.
              The L-Tido podcast has had a significant impact on South African audiences. It has provided a platform for South African entertainment personalities to share their stories, experiences, and perspectives with a wide audience. The podcast has become a popular source of entertainment and information, attracting a loyal following in South Africa and beyond. </p>
            <p>The podcast has also contributed to the growth and development of the South African entertainment industry by providing a space for artists to discuss their work and connect with audiences.
              These metrics will indicate that the L-Tido podcast has a strong following and is well-received by its audience. The podcast's ability to engage viewers and generate revenue makes it a promising platform for future episodes and potential sponsorships.</p>
            <div className='progress-block'>
              <h4>Music Production</h4>
              
            </div>
            <div className='progress-block'>
              <h4>Graphics</h4>
              
            </div>
            <div className='progress-block'>
              <h4>And More</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;