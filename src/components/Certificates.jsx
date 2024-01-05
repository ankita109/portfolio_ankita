import React, { useState, useCallback, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import DSAGFG from "./image/GFG_DSA.png";
import Lamicons from "./image/Lamicons.png";
import CPPUdemy from "./image/CPP_Udemy.png";
import CERA_serverJS from "./image/CERA_serverJS.png";
import Infosys from "./image/infosys.png";
import WEBUdemy from "./image/WEBD_Udemy.png";
import C_Everyone from "./image/C_Everyone.png";
import JS_Guvi from "./image/JS_Guvi.png";
import Python from "./image/Python.png";
import GraphicsD from "./image/GraphicsD.png";
import CNCPP from "./image/CNCPP.png";
import AnimatedCursor from "react-animated-cursor";

const Certificates = () => {
  <AnimatedCursor
    innerSize={8}
    outerSize={8}
    color="255,255,255"
    outerAlpha={0.5}
    innerScale={0.9}
    outerScale={10}
  />;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: DSAGFG,
      width: 10,
      height: 4,
    },
    {
      src: WEBUdemy,
      width: 5,
      height: 3,
    },
    {
      src: CPPUdemy,
      width: 5,
      height: 3,
    },
    {
      src: Infosys,
      width: 5,
      height: 3,
    },
    {
      src: CERA_serverJS,
      width: 5,
      height: 3,
    },
    {
      src: Lamicons,
      width: 5,
      height: 3,
    },
    {
      src: C_Everyone,
      width: 5,
      height: 3,
    },
    {
      src: JS_Guvi,
      width: 5,
      height: 3,
    },
    {
      src: Python,
      width: 5,
      height: 3,
    },
    {
      src: GraphicsD,
      width: 5,
      height: 3,
    },
    {
      src: CNCPP,
      width: 5,
      height: 3,
    },
  ];

  return (
    <>
      <div data-aos="zoom-in">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </>
  );
};

export default Certificates;
