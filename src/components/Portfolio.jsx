import GridRow from "./GridRow";
import CardList from "./CardList/CardList";
import Card from "./Card/Card";
import { Component } from 'react';
import portfolioData from '../resources/portfolio.json';


class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = { activeID: ''};
  }


  render(){

    const handleItemClick = (itemID: string) => () => {
      const currentState = this.state.activeID;
      this.setState({ activeID: currentState !== itemID ? itemID : '' });
    };

    return (
      <GridRow>
        <h3>Code Portfolio</h3>
        <CardList>
          {portfolioData.map((item) => (
            <Card
              key={item.id}
              onClick={handleItemClick(item.id)}
              active={this.state.activeID === item.id}
              title={item.title}
              chips={item.chips}
              chipColors={item.chipColors}
              image={item.image}
              description={item.description}
              descriptionBolds={item.descriptionBolds}
              contributions={item.contributions}
              contributionBolds={item.contributionBolds}
              links={item.links}
              linkIcons={item.linkIcons}
              linkText={item.linkText}
              iconsList={item.icons} />
          ))}
        </CardList>
      </GridRow>
    );
  }
}

export default Portfolio;
