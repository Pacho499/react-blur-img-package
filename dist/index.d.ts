import * as react_jsx_runtime from 'react/jsx-runtime';

interface SpinnerProps {
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
    aspectRatio?: React.CSSProperties["aspectRatio"];
    objectFit?: React.CSSProperties["objectFit"];
    objectPosition?: React.CSSProperties["objectPosition"];
    spinner?: SpinnerProps;
}
declare function BlurImg({ img, placeHolder, alt, aspectRatio, objectFit, objectPosition, spinner, }: Props): react_jsx_runtime.JSX.Element;

export { BlurImg as default };
