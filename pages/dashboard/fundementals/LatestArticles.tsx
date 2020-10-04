import React from 'react';
import {
  ArticleImage,
  ArticleBox,
  ContainerBox2,
  HeaderOne,
  HeaderTwo,
  SizedBox,
} from './styles';

import ArticleDisplay from './ArticleDisplay';

class LatestArticles extends React.Component {
  render() {
    const shadowColor =
      '0 1px 2px 0 rgba(224, 224, 224, 1), 0 4px 4px 0 rgba(224, 224, 224, 1)';
    return (
      <ContainerBox2
        color='#F9F9F9'
        height='100%'
        width='100%'
        marginRight='21px'
        shadowColor={shadowColor}
        borderRadius='30px'
        borderWidth='1px'
        borderColor='#F9F2F2'
        paddingLeft='21px'
        paddingTop='26px'
        marginBottom='21px'
      >
        <HeaderOne size='27px' color='#313131'>
          Latest Articles
        </HeaderOne>
        <SizedBox height='8px' />
        <HeaderTwo size='24px' color='#313131'>
          Read up on the latest in Covid-19 news
        </HeaderTwo>
        <SizedBox height='22px' />
        <ArticleDisplay
          marginBottom='0px'
          articleUrl='https://techcrunch.com/2020/09/24/uk-launches-covid-19-exposure-notification-app-for-england-and-wales/'
        />
        <ArticleDisplay
          marginBottom='0px'
          articleUrl='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov'
        />
        <ArticleDisplay
          marginBottom='0px'
          articleUrl='https://www.theguardian.com/politics/2020/oct/04/conservatives-turn-on-boris-johnson-over-handling-of-uks-covid-19-crisis'
        />
        <ArticleDisplay
          marginBottom='0px'
          articleUrl='https://news.sky.com/story/trump-coronavirus-how-the-us-media-is-reporting-presidents-covid-19-diagnosis-12089539'
        />
        <ArticleDisplay
          marginBottom='22px'
          articleUrl='https://www.dailymail.co.uk/news/article-8802177/amp/Infection-figures-rocket-record-12-872-DAY-nearly-double-yesterdays-6-968-cases.html'
        />
      </ContainerBox2>
    );
  }
}

export default LatestArticles;
