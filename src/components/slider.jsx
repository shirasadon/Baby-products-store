import Carousel from 'react-bootstrap/Carousel';
function Slider() {
    
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"600px",width:"1600px"}}
          src="https://www.internet-mom.com/wp-content/uploads/2013/03/328-SS-babies-play.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:"600px",width:"1600px"}} src="https://www.babyone.co.il/Uploads/60aa0a8e044761621756558_795_file_1600x0_4.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"600px",width:"1600px"}}
          src="https://baby-land.co.il/wp-content/uploads/2018/01/1.003.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}





export default Slider;