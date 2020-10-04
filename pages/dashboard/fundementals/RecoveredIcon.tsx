import React from 'react';

interface StyleIcon {
  color: string;
}

export class RecoveredIcon extends React.Component<StyleIcon> {
  render() {
    const color = this.props.color;

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 190 172'
      >
        <path
          id='Rectangle_1'
          data-name='Rectangle 1'
          d='M30.4,0H159.6A30.4,30.4,0,0,1,190,30.4V77a95,95,0,0,1-95,95h0A95,95,0,0,1,0,77V30.4A30.4,30.4,0,0,1,30.4,0Z'
          fill='#313131'
        />
        <path
          id='Rectangle_2'
          data-name='Rectangle 2'
          d='M11.325,0h128.35A11.325,11.325,0,0,1,151,11.325V59.5A75.5,75.5,0,0,1,75.5,135h0A75.5,75.5,0,0,1,0,59.5V11.325A11.325,11.325,0,0,1,11.325,0Z'
          transform='translate(20 18)'
          fill='#f9f9f9'
        />
        <line
          id='Line_1'
          data-name='Line 1'
          x2='36'
          y2='36'
          transform='translate(59.5 67.5)'
          fill='none'
          stroke='#313131'
          stroke-linecap='round'
          stroke-width='20'
        />
        <line
          id='Line_2'
          data-name='Line 2'
          x2='36'
          y2='36'
          transform='translate(131.5 67.5) rotate(90)'
          fill='none'
          stroke='#313131'
          stroke-linecap='round'
          stroke-width='20'
        />
      </svg>
    );
  }
}
