import React from 'react';
import '../../App.css';
import './Card.css'
import styled from 'styled-components';
import Slider from '../Slider';

const Styles = styled.div`
  .App {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    width: 50%;
  }
`;
export default function Home() {
  return (
    <>
      
      <div className='home'>
        <h1>Graph</h1>
      <div className="card-content">
        <div className='card-container'>
            <div className='card-title'>
                <h3><pre>            Range                -             +</pre></h3>
            </div>
            <div className='card-body'>
                <Styles>
                  <div className='s1'>
                    <div className='wrapper'>
                      <Slider color="#0074D9" text="Improves Personal Capabilities to think, feel, imagine, reason" />
                      <Slider color="#3D9970" text="Enhances Life Satisfaction (ability to evolve, to be innovative, to build, to invent, to design, to create)"/>
                      <Slider color="#FF4136" text="Enhances Feeling of Purpose" />
                      <Slider color="#0074D9" text="Enhances Participation"/>
                      <Slider color="#3D9970" text="Reduces Time and Effort"/>
                      <Slider color="#FF4136" text="Facilitates Convenience"/>
                      <Slider color="#0074D9" text="Helps Save or Earn Money"/>
                      <Slider color="#3D9970" text="Enhances Personal and Family Health and safety"/>
                      <Slider color="#FF4136" text="Immersive Experience"/>
                      <Slider color="#0074D9" text="Optimum Level of Challenge"/>
                      <Slider color="#3D9970" text="Connects People"/>
                      <Slider color="#FF4136" text="Builds Communities"/>
                      <Slider color="#0074D9" text="Provides choices for sustainable/socially responsible lifestyle decisions"/>
                      <Slider color="#3D9970" text="Inclusive (  of age, gender, income, literacy, differently abled, language)"/>
                    </div>
                  </div>
                </Styles>
            </div>
        </div>
    </div>
    </div>
      
    </>
  );
}

