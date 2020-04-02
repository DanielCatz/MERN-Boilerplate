import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';

const HeroImage = props => (
  /*
  height, collection/ browse slug, two pieces of text, color to display that text
  
  */
  <Parallax
    blur={0}
    bgImage={props.imageUrl}
    bgImageAlt="alt"
    bgImageStyle={{ objectFit: 'cover' }}
    style={{ height: '45vh', width: '100%' }}
    bgStyle={{ height: '40px', width: '100%' }}
    strength={600}
    renderLayer={percentage => (
      <div>
        <div
          style={{
            position: 'absolute',
            color: 'white',
            left: '50%',
            top: '50%'
          }}
        >
          <p>TITLE</p>
          <p>SUBTITLE</p>
          <div>
            <Button variant="outlined">Check it out</Button>
          </div>
        </div>
      </div>
    )}
  />
);

export default HeroImage;
