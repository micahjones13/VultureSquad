import React from "react";
import styled from "styled-components";

const IndivName = styled.div`
  padding: 10px;
  font-size: 2rem;
  width: 32%; //this to have 3 in each row
`;

const Nameplate = props => {
  return (
    <IndivName>
      <div className="nameplate-container">
        <p>{props.name}</p>
      </div>
    </IndivName>
  );
};

export default Nameplate;
