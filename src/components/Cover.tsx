import React from 'react';
import { components } from './';
import video from "../media/video.mp4";

export default function Cover() {
  return (
    <video src={video} autoPlay muted loop/>
  )
}
