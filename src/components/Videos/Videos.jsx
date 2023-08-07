//css
import classes from "./Videos.module.css";
//icons
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//react-youtube
import YouTube from "react-youtube"; // Import the react-youtube library
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//videoList
import videoList from "./videoList";
//
import { useState } from "react";

const Videos = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  return (
    <div className={classes.videos}>
      <Container>
        <Row>
          <h2 className={classes.videos_h}>מה אנחנו מנגנים</h2>
        </Row>
        <Row>
          <Col>
            <Swiper
              loop={true}
              onSwiper={setSwiperInstance}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".prevButton",
                nextEl: ".nextButton",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              grabCursor='true'
              spaceBetween={10}
              slidesPerView={1}>
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
            <div className={classes.navigationArrows}>
              <button className={classes.prevButton} onClick={handlePrevSlide}>
                <PiCaretRightBold />
              </button>
              <button className={classes.nextButton} onClick={handleNextSlide}>
                <PiCaretLeftBold />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Videos;
