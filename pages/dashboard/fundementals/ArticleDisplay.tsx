import React from "react";
import {
  ArticleImage,
  ArticleBox,
  ContainerBox2,
  HeaderOne,
  HeaderTwo,
  SizedBox,
  HeaderBox,
} from "./styles";

interface InputsExpected {
  articleUrl: string;
  marginBottom: string;
}

class ArticleDisplay extends React.Component<InputsExpected> {
  state = {
    title: "loading",
    description: "loading",
    image: "loading",
    url: "loading",
    lengthTitle: 0,
    lengthDescription: 0,
  };

  async componentDidMount() {
    const url = "https://api.linkpreview.net";
    const key = "NOP";

    const keyValues = {
      key: key,
      q: this.props.articleUrl,
    };

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(keyValues),
    });
    const data = await response.json();
    this.setState({ title: data.title });
    this.setState({ description: data.description });
    this.setState({ image: data.image });
    this.setState({ url: data.url });
    this.setState({ lengthDescription: data.description.length });
  }

  render() {
    const subtractString = (x) => {
      let trimmedString = x.substring(0, 30);
      trimmedString = trimmedString + "...";

      return trimmedString;
    };
    return (
      <a href={this.state.url}>
        <ArticleBox marginBottom={this.props.marginBottom}>
          <ArticleImage src={this.state.image}></ArticleImage>
          <HeaderBox>
            <HeaderOne size="18px" color="#313131">
              {subtractString(this.state.title)}
            </HeaderOne>
            <SizedBox height="5px" />
            <HeaderTwo size="15px" color="#313131">
              {subtractString(this.state.description)}
            </HeaderTwo>
          </HeaderBox>
        </ArticleBox>
      </a>
    );
  }
}

export default ArticleDisplay;
