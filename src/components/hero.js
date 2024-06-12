import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Prince Kaybee',
    description: 'Watch Below',
    link: 'https://www.facebook.com/FAMLIFEMUSIC'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'CAssper Nyovest',
    description: 'Watch Below',
    link: 'https://www.facebook.com/FAMLIFEMUSIC'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Mawhoo',
    description: 'Watch Below',
    link: 'https://www.facebook.com/FAMLIFEMUSIC'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Watch<i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;