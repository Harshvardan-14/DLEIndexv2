import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  p{
    font-size: small;
    width:30vh;
  }

  .value {
    flex: 1;
    font-size: 2rem;
    &::span{
      color: #fff;
    }

    &::span:after{
      background: #664AFF;
    }
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 50vh;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
  .slider:hover{
    background: #ff0000;
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 1
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
      <Styles opacity={this.state.value > 1 ? (this.state.value*2) : .1} color={this.props.color} >
         <p> {this.props.text} </p>
        <input type="range" min={0} max={10} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}

