import React from "react";

export interface video {
  title: string;
  photo: string;
  url: string;
}
export interface videoviews {
  State: video[] | null;
}
const Square: React.CSSProperties = {
  width: "20vw",
  height: "20vw",
  backgroundImage: "url('favicon.ico')",
  position: "relative",
  border: "1px solid #eee",
  borderRadius: "8px",

  top: "20vw",
  bottom: "10vw",
  right: "0vw",
  left: "5vw",
};
const Videoview: React.FC = () => {
  return <div style={Square}></div>;
};
export default Videoview;
