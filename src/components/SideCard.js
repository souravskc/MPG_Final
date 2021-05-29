import React, { Component } from 'react'
import styled from "styled-components";
import { breakpoints }  from "../utils/Breakpoints";
export class SideCard extends Component {

    render() {
    

        return (
    <div>
           <Container>
          <RectGreen>
            <TipsColumn>
            <Tips>{this.props.title}</Tips> 
            <Text>
             {this.props.description}
            </Text>
          </TipsColumn>

          </RectGreen>
      </Container>
            </div>
        )
    }
}




const Container = styled.div`
   width: 850px;
  background-color: rgba(255,255,254,1);
  border-radius: 8px;
  border-width: 1px;
  border-color: rgba(150,144,144,1);
  flex-direction: column;
  display: flex;
  margin-top: 0px;
  margin-left: 0px;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.05px rgba(0,0,0,0.1) ;
  ${breakpoints("width", "px", [
    { 1200: 800 },
    { 768: 726 },
    { 600: 384 },
    { 374: 333.6 },
    {320:278}
  ])};
 
`;

const RectGreen = styled.div`
  width: 9px;
   background-color: rgba(255, 167, 0, 1)   ;
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  flex: 0 0 auto;
 
`;

const Tips = styled.span`
  font-family: lato;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 25px;
`;

const Text = styled.span`
  font-family: lato;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 830px;
  flex-direction:column;
  font-size: 15px;
  margin-top: 14px;
  margin-left: 5px;
  padding :2px 5px 12px 17px;
  ${breakpoints("width", "px", [
    { 1200: 700 },
    { 800: 570 },
    { 600: 350},
    { 450: 300  },
    { 320 : 215}
  ])};
`;

const TipsColumn = styled.div`
  width: 785px;
  flex-direction: column;
  display: flex;
  margin-left: 29px;
  margin-top: 18px;
  margin-bottom: 8px;
`;


export default SideCard
