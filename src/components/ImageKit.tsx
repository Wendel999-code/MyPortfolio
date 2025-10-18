/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const ImageKit = (props: any) => {
  return <IKImage urlEndpoint={urlEndpoint} {...props} />;
};

export default ImageKit;

/* eslint-enable @typescript-eslint/no-explicit-any */
