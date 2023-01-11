import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    console.log("## rendering HomeCarousell...")
      return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/z/female-datacenter-manager-colleague-server-room-57605256.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                  src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
                alt=" slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                 src="https://media.istockphoto.com/id/514504740/photo/server-room-interior-in-data-center.jpg?s=1024x1024&w=is&k=20&c=cm23KUhK2bzf1sNW6GYqdNkLNeXTiS3q9FxdfXTPF9k="
                 alt=" slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    );
}
  
const Home = () => ( 
    <div>
        <h1>Filecoin Storage Gateway</h1>
        <h3>Web Admin Console</h3>
        <HomeCarousel/>
    </div>
);

export default Home;
