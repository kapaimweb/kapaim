//css
import classes from "./Videos.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//react-youtube
import YouTube from "react-youtube"; // Import the react-youtube library
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//videoList
import videoList from "./videoList";

const Videos = () => {
  return (
    <div className={classes.videos}>
      <Container>
        <Row>
          <h2 className={classes.videos_h}>מה אנחנו מנגנים</h2>
        </Row>
        <Row>
          <Col>
            <Swiper grabCursor='true' spaceBetween={50} slidesPerView={3}>
              {videoList.map((video) => (
                <SwiperSlide key={video.id}>
                  <Card className='text-center'>
                    <Card.Header> {video.title} </Card.Header>
                    <Card.Body>
                      <YouTube
                        videoId={video.id}
                        className='youtube-player'
                        opts={{
                          width: "100%",
                          playerVars: {
                            autoplay: 0,
                            controls: 0,
                          },
                        }}
                      />
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Videos;
