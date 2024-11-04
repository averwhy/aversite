import { Message } from "primereact/message";
import { useState } from "react";

const errorMsgPT = {
    root: {className: "bg-slate-900 text-base"},
    text: {className: "text-sm font-mono tracking-tight"}
  };

interface ImgThatCanHandleItsOwnErrorsProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};
  
const ImgThatCanHandleItsOwnErrors: React.FC<ImgThatCanHandleItsOwnErrorsProps>  = ({src, alt, width, height}) => {
const [picError, setPicError] = useState(false);
function picErrored(){ setPicError(true) };
return (
    picError ? (
    <Message severity="error" text="picture failed to load. this might be cloudflare's fault" pt={errorMsgPT} className="place-self-center"/>
    ) : (
    <img src={src} alt={alt} width={width} height={height} onError={picErrored}/>
    )
)
}

export default ImgThatCanHandleItsOwnErrors;