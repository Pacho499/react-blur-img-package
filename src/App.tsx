import { useEffect, useRef, useState } from "react";
import "./app.css";

export interface SpinnerProps {
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  border?: React.CSSProperties["border"];
  borderTop?: React.CSSProperties["borderTop"];
  color?: React.CSSProperties["borderColor"];
  style?: React.CSSProperties["borderStyle"];
}

interface Props {
  img: string;
  placeHolder: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
  spinner?: SpinnerProps;
}

function BlurImg({
  img,
  placeHolder,
  alt,
  aspectRatio,
  objectFit,
  objectPosition,
  spinner,
}: Props) {
  const blurLoadDiv = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loaded = (): void => {
    if (blurLoadDiv.current) {
      setLoading(false);
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
      style={
        {
          backgroundImage: `url(${placeHolder})`,
          "--aspect-ratio": aspectRatio,
          "--object-fit": objectFit,
          "--object-position": objectPosition,
          "--border-color": spinner?.color,
          "--border-style": spinner?.style,
        } as React.CSSProperties
      }
    >
      {loading && <div className="spinner" style={spinner}></div>}
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

export { BlurImg };
