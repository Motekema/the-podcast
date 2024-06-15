import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Prince Kaybee',
    description: 'EPISODE 17 PRINCE KAYBEE ON BEING HOMELESS, BEEF WITH DJ MAPHORISA, BLACK COFFEE, CASSPER',
    link: 'https://youtu.be/9MNrfoBe8Kk?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Cassper Nyovest',
    description: 'Episode 8 Cassper Nyovest Raw & Unfiltered , AKA’s Passing, Solomon Composure, AmaPiano Beef',
    link: 'https://youtu.be/_VVXGn8OwqU?list=PL61WJyfydYs-yB0Y1l77e5N1KoP8AzqjV'
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