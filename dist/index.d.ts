import * as react_jsx_runtime from 'react/jsx-runtime';

interface SpinnerProps {
    width: React.CSSProperties["width"];
    height: React.CSSProperties["height"];
    borderWidth?: React.CSSProperties["borderWidth"];
    color?: React.CSSProperties["borderColor"];
    style?: React.CSSProperties["borderStyle"];
    borderTop?: React.CSSProperties["borderTop"];
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
declare function BlurImg({ img, placeHolder, alt, aspectRatio, objectFit, objectPosition, spinner, }: Props): react_jsx_runtime.JSX.Element;

export { BlurImg, type SpinnerProps };
