import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (errorMessage !== null) {
    return <h2>Error Occured! {errorMessage} </h2>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <div className="container">
          <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className={`arrow arrow-left ${
              //if we are on first image and click on previoud then nothing should happend and button should be disable
              currentSlide === 0 ? "disable" : ""
            }`}
          />
          {images &&
            images.map((item, index) => (
              <img
                src={item.download_url}
                alt={item.download_url}
                key={item.id}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))}
          <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right"
          />
          <span className="circle-indicators">
            {" "}
            {images && images.length > 0
              ? images.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentSlide == index
                        ? "current-indicator"
                        : "current-indicator hide-current-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))
              : null}
          </span>
        </div>
      )}
    </>
  );
}
