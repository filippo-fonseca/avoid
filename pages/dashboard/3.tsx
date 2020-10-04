import React from 'react';
import { FlexBoxTwo, MarginedBox } from './styles';
import MapPreview from './fundementals/MapPreview';

class ComponentThree extends React.Component {
  render() {
    return (
      <FlexBoxTwo height='100%' width='100%' flexDirection='row'>
        <MarginedBox marginTop='21px' marginRight='21px'>
          <MapPreview />
        </MarginedBox>
      </FlexBoxTwo>
    );
  }
}

export default ComponentThree;
