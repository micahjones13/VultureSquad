import React from "react";
import data from "../data/dummydata.js";
import Nameplate from "./Nameplates.js";
import styled from "styled-components";
import RecentClips from "./Recentclips.js";

const NameDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      squadNames: data,
      ThriftyClips: []
    };
  }

  render() {
    return (
      <div>
        <h1>Meet the Squad</h1>
        <NameDivWrapper>
          {this.state.squadNames.map(name => {
            return <Nameplate name={name} />;
          })}
        </NameDivWrapper>
        <hr></hr>
        <h1>Recent/Best Clips</h1>
        <RecentClips />
      </div>
    );
  }
}

export default Home;
