import { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";
const Gallery = () => {
  const [heading] = useState("Travelers captured images");
  const {
    galleryStore: { gallery, lightboxStatus },
    dispatch,
  } = useContext(GalleryContext);

  return (
    <>
    {lightboxStatus ? <LightBox /> : ''}
      <div className="gallery">
        <div className="container">
          <h2 className="heading mb-55 headingAnimation">{heading}</h2>
          <div className="row">
            {gallery.length > 0
              ? gallery.map((glr, index) => (
                  <GalleryImage key={index} glr={glr} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
