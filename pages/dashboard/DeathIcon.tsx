import React from 'react';

interface StyleIcon {
  color: string;
}

class DeathIcon extends React.Component<StyleIcon> {
  render() {
    const color = this.props.color;
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 566.309 522'
      >
        <g
          id='Ellipse_1'
          data-name='Ellipse 1'
          transform='translate(74)'
          fill='none'
          stroke={color}
          stroke-width='40'
        >
          <circle cx='118' cy='118' r='118' stroke='none' />
          <circle cx='118' cy='118' r='98' fill='none' />
        </g>
        <g
          id='Rectangle_1'
          data-name='Rectangle 1'
          transform='translate(0 301)'
          fill='none'
          stroke={color}
          stroke-width='40'
        >
          <path
            d='M111,0H274A111,111,0,0,1,385,111V221a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V111A111,111,0,0,1,111,0Z'
            stroke='none'
          />
          <path
            d='M111,20H274a91,91,0,0,1,91,91v70a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V111A91,91,0,0,1,111,20Z'
            fill='none'
          />
        </g>
        <line
          id='Line_1'
          data-name='Line 1'
          x2='121.525'
          y2='121.525'
          transform='translate(416.5 142.975)'
          fill='none'
          stroke={color}
          stroke-linecap='round'
          stroke-width='40'
        />
        <line
          id='Line_2'
          data-name='Line 2'
          x2='121.525'
          y2='121.525'
          transform='translate(538.025 142.975) rotate(90)'
          fill='none'
          stroke={color}
          stroke-linecap='round'
          stroke-width='40'
        />
      </svg>
    );
  }
}

export default DeathIcon;
