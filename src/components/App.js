import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { addTopTenSongs, arrowClickedFirst, arrowClickedLast } from '../actions/index';

//Components
import Box from './Box';
import { ArrowLeft, ArrowRight } from './Arrows';


class App extends Component {

  componentDidMount () {
    //Get the top ten song from iTunes and pass it to the reducer
    const URL = 'http://itunes.apple.com/us/rss/topsongs/genre=1/json';

    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.addTopTenSongs(data.feed.entry);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {

    const {
      currentFirstIndex,
      currentLastIndex,
      apiData
    } = this.props;

    //forEach loop to find the indexes between the currentFirstIndex and currentLastIndex.
    // Only 5 should be pushed to onlyFiveReleases const.
    let onlyFiveReleases = [];

    apiData.forEach((release, index) => {
      if (currentFirstIndex <= index && index <= currentLastIndex){
        onlyFiveReleases.push(release);
      }
    })

    return <div className="mainContainer">
      <ArrowLeft arrowClick={this.arrowClick}/>
      {onlyFiveReleases.map((release, index) =>
        <Box key={index} artist={release["im:artist"].label} image={release["im:image"][2].label} title={release["im:name"].label}/>
      )}
      <ArrowRight arrowClick={this.arrowClick}/>
    </div>
  }

  //The parameter (arrowClicked) is passed from the ArrowLeft & ArrowRight Components.
  // Depending on the parameter the currentFirstIndex & currentLastIndex gets increased or decrease by 5
  arrowClick = (arrowClicked) => {

    const {
      arrowClickedFirst,
      arrowClickedLast,
      currentFirstIndex,
      currentLastIndex,
      apiData
    } = this.props;

    if (arrowClicked === "arrowLeft") {
      if (currentFirstIndex > 0) {
        arrowClickedFirst(currentFirstIndex - 5)
        arrowClickedLast(currentLastIndex - 5)
      } else {
        arrowClickedFirst(0)
        arrowClickedLast(4)
      }
    } else {
      if (currentLastIndex > apiData.length) {
        arrowClickedFirst(currentFirstIndex + 5)
        arrowClickedLast(currentLastIndex + 5)
      } else {
        arrowClickedFirst(apiData.length - 5)
        arrowClickedLast(apiData.length - 1 )
      }
    }
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addTopTenSongs: (data) => dispatch(addTopTenSongs(data)),
        arrowClickedFirst: (number) => dispatch(arrowClickedFirst(number)),
        arrowClickedLast: (number) => dispatch(arrowClickedLast(number))
    };
};

const mapStateToProps = (state) => {
    return {
        apiData: state.apiData,
        currentFirstIndex: state.currentFirstIndex,
        currentLastIndex: state.currentLastIndex,
        arrow: state.arrow
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
