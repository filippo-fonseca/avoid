import React from 'react';

interface StyleIcon {
  color: string;
}

export class HospitalizedIcon extends React.Component<StyleIcon> {
  render() {
    const color = this.props.color;
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 380 380'
      >
        <g
          id='Ellipse_1'
          data-name='Ellipse 1'
          fill='none'
          stroke={color}
          stroke-width='30'
        >
          <circle cx='190' cy='190' r='190' stroke='none' />
          <circle cx='190' cy='190' r='175' fill='none' />
        </g>
        <g
          id='Ellipse_2'
          data-name='Ellipse 2'
          transform='translate(74 74)'
          fill='none'
          stroke={color}
          stroke-width='30'
        >
          <circle cx='116.5' cy='116.5' r='116.5' stroke='none' />
          <circle cx='116.5' cy='116.5' r='101.5' fill='none' />
        </g>
        <g
          id='Ellipse_3'
          data-name='Ellipse 3'
          transform='translate(141 140)'
          fill='none'
          stroke={color}
          stroke-width='30'
        >
          <circle cx='50.5' cy='50.5' r='50.5' stroke='none' />
          <circle cx='50.5' cy='50.5' r='35.5' fill='none' />
        </g>
      </svg>
    );
  }
}
