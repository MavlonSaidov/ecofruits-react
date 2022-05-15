import React from 'react'
import './Gallery.scss'
import Tilt from 'react-parallax-tilt'
const Gallery = () => {
  return (
    <div className="gallery">
          <h2 className="gallery__title">Галерея</h2>
          <div className="gallery__grid">
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame2.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame3.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame4.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame5.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame6.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame7.jpg" alt="gallery-image" />
              </div>
            </Tilt>
            <Tilt>
              <div className="gallery__grid-item">
                <img src="assets/img/Frame8.jpg" alt="gallery-image" />
              </div>
            </Tilt>
          </div>
        </div>
  )
}

export default Gallery