import React from "react"
import styled from "styled-components";
import {AiOutlineStar} from "react-icons/ai"
import {MdStars,MdOutlineKayaking} from "react-icons/md"
import {BsShieldShaded} from "react-icons/bs"
import {TbComet} from "react-icons/tb"
import {GiLynxHead} from "react-icons/gi"
import jumia from "../../Assets/logo_jumia.svg"
import Header from "../Block/Header";


const Picture=()=>{
    return(
        <div>
             <Container>
                <Main>
                  <Pics>
                   <Text>Avoid cash wahala, prepay with JUMIA<AiOutlineStar/>PAY </Text> 
                   <Number>
                    <Call>Call to order</Call>
                    <Num>0700  600  0000</Num>
                   </Number>
                   <Div></Div>
                 </Pics> 
                  <NavHolder>
                    <Sell><Icons/> <div>sell on jumia</div></Sell>
                    <Navs>
                        <Nav4 src={jumia}></Nav4>
                        <Nav><Icon1/><div>PAY</div></Nav>
                        <Nav1><Icon2/><div>FOOD</div></Nav1>
                        <Nav2><Icon3/><div>PARTY</div></Nav2>
                        <Nav3><Icon4/><div>LOGISTICS</div></Nav3>
                    </Navs>
                  </NavHolder>
                  <Header/>
                </Main>
                <Main2>
                <Pics>
                   <Number>
                    <Call>Call to order</Call>
                    <Num>0700  600  0000</Num>
                   </Number>
                   <Div></Div>
                 </Pics> 
                  <NavHolder>
                    <Sell><Icons/> <div>sell on jumia</div></Sell>
                    <Navs>
                        <Nav4 src={jumia}></Nav4>
                        <Nav><Icon1/><div>PAY</div></Nav>
                    </Navs>
                  </NavHolder>
                  <Header/>
                </Main2>
                <Main3></Main3>
                </Container>   
        </div>
    )
}

export default Picture;
const Container=styled.div`
  height: 170px;
  width:100%;
  background-color: blue;  
`
const Main=styled.div`
height:100%;
display:flex;
flex-direction:column;
/* justify-content:center; */
/* align-items:center; */

@media screen and (max-width: 700){
    display:none;
}
`
const Main2=styled.div`
height:100%;
display:none;
flex-direction:column;
/* justify-content:center; */
/* align-items:center; */

@media screen and (max-width: 700){
    display:block;
}
`
const Main3=styled.div`
height:100%;
display:flex;
flex-direction:column;
/* justify-content:center; */
/* align-items:center; */
`
const Pics=styled.div`
height:60px;
width: 100%;
display: flex;
/* justify-content:center; */
align-items:center;
flex-direction:row;
background-color:white;
border-top:0.5px solid silver;

:hover{
    cursor: pointer;
}`
const NavHolder=styled.div`
height:40px;
width:100%;
background-color: #f1f1f2;
/* padding:0px 130px; */
display:flex;
align-items:center;
`
const Text=styled.div`
height:100%;
width:70%;
background-color: #ff9900;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:35px;
font-weight:800;
`
const Number=styled.div`
height:100%;
width:20%;
background-color: #abdef1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
line-height:23px;
`
const Div=styled.div`
height:100%;
width:10%;
background-color: #ff9900;`
const Call=styled.div`
font-size:20px;
font-weight:700;
text-align:center;
color:black;`
const Num=styled.div`
font-size:25px;
font-weight:800;
color:black;`
const Sell=styled.div`
color: #ff9900;
font-size:16px;
font-weight:500;
display:flex;
margin-right:300px;
margin-left:110px;
:hover{
    text-decoration:underline;
    cursor:pointer;
}
`
const Navs=styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;`
const Nav1=styled.div`
font-size:16px;
color:lightgray;
font-weight:500;
display:flex;
margin:0px 10px;
:hover{
    cursor: pointer;
    color: blue;
}`
const Nav2=styled.div`
color:lightgray;
font-size:16px;
font-weight:500;
display:flex;
margin:0px 10px;
:hover{
    cursor: pointer;
    color: #ff9900;
}`
const Nav3=styled.div`
color:lightgray;
font-size:16px;
font-weight:500;
display:flex;
margin:0px 10px;
:hover{
    cursor: pointer;
    color: #520707;
}`
const Nav4=styled.img`
color:lightgray;
height:13px;
margin:0px 10px;
`
const Nav=styled.div`
color:lightgray;
font-size:16px;
font-weight:500;
display:flex;
margin:0px 10px;
:hover{
    cursor: pointer;
    color: #8d5706;
}`
const Icons=styled(MdStars)`
margin-top:5px;
margin-right:5px;
`
const Icon1=styled(BsShieldShaded)`
margin-top:5px;
margin-right:5px;
`
const Icon2=styled(TbComet)`
margin-top:5px;
margin-right:5px;`
const Icon3=styled(MdOutlineKayaking)`
margin-top:5px;
margin-right:5px;`
const Icon4=styled(GiLynxHead)`
margin-top:5px;
margin-right:5px;`

