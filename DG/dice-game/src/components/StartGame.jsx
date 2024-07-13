import styled from "styled-components";
import { Button } from "../styled/Button";
import { useState } from "react";
import Rules from "./Rules";

const StartGame = ({ toggle }) => {
  const [showRules, setShowRules] = useState(false);
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>


        <div className="btns">


        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        
      </div>
   
         {showRules && <Rules />}
      
      </div>
      
      
    </Container>

    
  );
};

export default StartGame;



const Container = styled.div`
  max-width: 750px;
  height: 50vh;
  display: flex;
  margin: auto;
  align-items: center;

  .content {
    h1 {
      font-size: 100px;
      white-space: nowrap;
      margin-left: 15%;
    }
  }
  .btns {
    margin-top: 325px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 0%;
    margin-right:100px
  }
  
`;
