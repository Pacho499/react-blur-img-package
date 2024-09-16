# BlurImg Component

The `BlurImg` component is a React component that provides a blurred placeholder image until the main image finishes loading. It also supports an optional loading spinner for a better user experience.

![Demo](/Classic.gif)

## Features

- Lazy-loads images with a blurred placeholder.
- Displays a loading spinner while the image loads.
- Fully customizable via props for `aspectRatio`, `objectFit`, and `objectPosition`.
- Easy to use and integrate into any React project.

## Installation

1. Clone or download the component files.
2. Make sure you have React installed in your project:

```bash
npm i react-blur-img
```

3. Import the component in your project

```javascript
import { BlurImg } from "react-blur-img";
```

4. Usage

```javascript
import { BlurImg } from "react-blur-img";
import { img } from "https://example.com/real-image.jpg";
import { placeHolder } from "https://example.com/placeholder.jpg";

function App() {
  return (
    <div>
      <BlurImg img={img} placeHolder={placeHolder} alt="Descriptive Alt Text" />
    </div>
  );
}
```

## Props

### `Required` props

| Prop        | Type     | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| img         | `String` | The image to render.                          |
| placeHolder | `String` | PlaceHolder to render while image is loading. |
| alt         | `String` | The alt text                                  |

### `Optional` props

| Prop           | Type                                    | Default   | Description                                                                         |
| :------------- | :-------------------------------------- | :-------- | :---------------------------------------------------------------------------------- |
| aspectRatio    | `React.CSSProperties["aspectRatio"]`    | `1/1`     | Controls the aspect ratio of the image (e.g., "16/9")                               |
| objectFit      | `React.CSSProperties["objectFit"]`      | `contain` | Specifies how the image should fit within its container (e.g., "cover", "contain"). |
| objectPosition | `React.CSSProperties["objectPosition"]` | `center`  | Determines the position of the image within its container (e.g., "center", "top").  |
| Spinner        | `SpinnerProps`                          |           | Can change the default Spinner.                                                     |

### `Spinner Props` structure

| Prop      | Type                                 | Default            | Description                                              |
| :-------- | :----------------------------------- | :----------------- | :------------------------------------------------------- |
| width     | `React.CSSProperties["width"]`       | `40px`             | Controls the width of the spinner.                       |
| height    | `React.CSSProperties["height"]`      | `40px`             | Controls the height of the spinner.                      |
| border    | `React.CSSProperties["border"]`      | `4px dotted black` | Controls the thickness, style and color for the spinner. |
| borderTop | `React.CSSProperties["borderTop"]`   | `none`             | Controls Top border to create another rotating effect.   |
| color     | `React.CSSProperties["borderColor"]` | `black`            | Controls the color for the spinner.                      |
| style     | `React.CSSProperties["borderStyle"]` | `dotted`           | Controls the style for the spinner.                      |

## `CSS classes`

| Name                | Description                                                                                                    |
| :------------------ | :------------------------------------------------------------------------------------------------------------- |
| blur-load-container | The main wrapper for the image and the loading placeholder.                                                    |
| blur-load-img       | Handle img style                                                                                               |
| loaded              | Added to the container once the image has fully loaded, removing the placeholder and making the image visible. |
| spinner             | Defines the spinner's appearance and animation.                                                                |

## Custom Spinner usage

```javascript
import { BlurImg, SpinnerProps } from "react-blur-img";
import { img } from "https://example.com/real-image.jpg";
import { placeHolder } from "https://example.com/placeholder.jpg";

const spinner: SpinnerProps = {
  width: 40,
  height: 40,
  borderTop: "4px dashed red",
  color: "white",
  style: "dashed",
};

function App() {
  return (
    <div>
      <BlurImg
        img={img}
        placeHolder={placeHolder}
        alt="Descriptive Alt Text"
        spinner={spinner}
      />
    </div>
  );
}
```

![Demo](/customSpinner.gif)
