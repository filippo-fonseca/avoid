import React from 'react';
import { FlexBoxTwo, MarginedBox } from './styles';
import LatestArticles from './fundementals/LatestArticles';
import MoreInfo from './fundementals/MoreInfo';

class ComponentFour extends React.Component {
  render() {
    return (
      <FlexBoxTwo
        height='50%'
        width='50%'
        flexDirection='column'
        marginRight='21px'
      >
        <LatestArticles />
        <MoreInfo />
      </FlexBoxTwo>
    );
  }
}

export default ComponentFour;
