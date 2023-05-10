import { Component } from 'react';
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "./CardHero/CardHero";
import FadeHeader from "./FadeHeader";
import portfolioData from '../resources/data/portfolio.json';


class KeyProjects extends Component {
  constructor(props){
    super(props);
    this.state = { id: '', click: null};
  }


  render(){
    const onSeeMore = () => {
      this.setState({ click: true});
    };

    const onClick = (itemID: string) => () => {
      const currentState = this.state.id;
      this.setState({ id: currentState !== itemID ? itemID : '' });
    };


    return (
      <div>
        <FadeHeader title="Recent Projects" />
        <ul className="card-list small-cards pe-5 ps-5 pb-3">
          <Card
            key={portfolioData[0].id}
            isSelected={this.state.id === portfolioData[0].id}
            theme={this.props.theme}
            onClick={onClick(portfolioData[0].id)}
            pointOfInterest={0}
            backgroundColor={"#5DBCD2"}
            {...portfolioData[0]}
          />
          <Card
            key={portfolioData[1].id}
            isSelected={this.state.id === portfolioData[1].id}
            theme={this.props.theme}
            onClick={onClick(portfolioData[1].id)}
            pointOfInterest={1}
            backgroundColor={"#5DBCD2"}
            {...portfolioData[1]}
          />
          <Card
            key={portfolioData[2].id}
            isSelected={this.state.id === portfolioData[2].id}
            theme={this.props.theme}
            onClick={onClick(portfolioData[2].id)}
            pointOfInterest={0}
            backgroundColor={"#5DBCD2"}
            {...portfolioData[2]}
          />
        </ul>
        <motion.div
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.95}}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0}}
          transition={{ duration: 0.3 }}
          className="resume-section-title text-center no-select see-more mt-2"
          onClick={onSeeMore}
        >
          <h5>See More</h5>
          <BsArrowRight className="ms-2 mt-1" style={{ fontSize: "22px"}}/>
          {this.state.click && (
            <Navigate to="/portfolio" />
          )}


        </motion.div>
      </div>
    );
  }
}

export default KeyProjects;
