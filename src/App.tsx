import { useEffect, useRef } from "react";
import "./app.css";

interface Props {
  img: string;
  imgSm: string;
  alt: string;
}

function App({ img, imgSm, alt }: Props) {
  const blurLoadDiv = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  const loaded = (): void => {
    if (blurLoadDiv.current) {
      blurLoadDiv.current.classList.add("loaded");
    }
  };

  useEffect(() => {
    if (blurLoadDiv.current && image.current) {
      if (image.current.complete) {
        loaded();
      } else {
        image.current.addEventListener("load", loaded);
      }
    }
  }, []);

  return (
    <div
      className="blur-load-container"
      ref={blurLoadDiv}
      style={{ backgroundImage: `url(${imgSm})` }}
    >
      <img
        className="blur-load-img"
        src={img}
        alt={alt}
        ref={image}
        loading="lazy"
      />
    </div>
  );
}

export default App;
