import React from "react"
import styled from "styled-components"
import jumia from "../../Assets/logo_jumia.svg"
import {BiSearchAlt2} from "react-icons/bi"
import {IoPersonOutline} from "react-icons/io5"
import {AiOutlineQuestionCircle, AiOutlineShoppingCart} from "react-icons/ai"
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri"
import {useState} from "react"

const Header=()=>{
    const [toggle,setToggle]=useState<boolean>(false)
  const onToggle=()=>{
    setToggle(!toggle)
  }
  const [toggle1,setToggle1]=useState<boolean>(false)
  const onToggle1=()=>{
    setToggle1(!toggle1)
  }
  
    return(
        <div>
            <Container>
                <Main>
                 <Logo  src={jumia}/>
                 <NavHolder>
                 <Holder>
                    <Iconz/>
                   <Search placeholder="Search products, brands and categories"  />
                 </Holder>
                 <Button>Search</Button>
                 <Nav onClick={()=>{
                    onToggle()
                 }}><Icon1 /> <div>Account</div>{toggle ? <Icon4/> : <Icons/>} {toggle?<Divv></Divv> :null}</Nav>
                 <Nav onClick={()=>{
                    onToggle1()
                 }}><Icon2 /><div>Help</div>{toggle1 ? <Icon4/> : <Icons/>}{toggle1?<Divv2></Divv2> :null}</Nav>
                 <Nav><Icon3 /><div>Cart</div></Nav>
                 </NavHolder>
                </Main>
                <Main2>
                <Logo  src={jumia}/>
                 <NavHolder>
                 <Holder>
                    <Iconz/>
                   <Search placeholder="Search products, brands and categories"  />
                 </Holder>
                 </NavHolder>
                </Main2>
            </Container>
        </div>
    )
}

export default Header
const Container=styled.div`
height:70px;
width:100%;
background-color: white;`
const Main=styled.div`
height:100%;
border-bottom:0.5px solid silver;
display:flex;
/* justify-content:space-between; */
align-items:center;
flex-direction:row;
@media screen and (max-width: 700){
    display:none;
}`

const Main2=styled.div`
height:100%;
border-bottom:0.5px solid silver;
display:none;
/* justify-content:space-between; */
align-items:center;
flex-direction:row;

@media screen and (max-width:700){
  display:flex;
}`
const Logo=styled.img`
padding:0px 110px;`
const Holder=styled.div`
  display:flex;
  flex-direction:row;
  align-items:center; 
  height:40px;
  width:45%;
  background-color:white;
  border: 0.5px solid grey;
  border-radius:5px;
  margin-right:12px;
`
const Search=styled.input`
border: 0.5px solid white;
outline: 0.5px solid white;
height: 70%;
width: 85%;
font-size:18px;
font-family: 700;
`
const Iconz=styled(BiSearchAlt2)`
padding:0px 12px;
font-size:24px;
color: #636262;
 `
const NavHolder=styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:80%;`
const Button =styled.button`
height:45px;
width:100px;
margin-right:20px;
background-color: #ff9900;
box-shadow: rgba(119, 118, 118, 0.35) 0px 5px 15px;
border:none;
border-radius:5px;
text-transform:uppercase;
font-size:16px;
color:white;
font-weight:700; 
:hover{
   background-color: #c87904;
   cursor: pointer;
}`
const Nav=styled.div`
/* font-size: 24px; */
color: black;
height: 90%;
font-weight:500;
display:flex;
margin:0px 20px;
position: relative;

:hover{
    cursor: pointer;
    /* background-color:lightgray; */
    color: #ff9900;
}

div{
 font-size: 19px;
}`
const Icon1=styled(IoPersonOutline)`
margin-bottom:3px;
margin-right:5px;
font-size: 28px;
`
const Icon2=styled(AiOutlineQuestionCircle)`
margin-bottom:3px;
margin-right:5px;
font-size: 28px;
`
const Icon3=styled(AiOutlineShoppingCart)`
margin-bottom:3px;
margin-right:5px;
font-size: 28px;
`
const Icons=styled(RiArrowDropDownLine)`
margin-bottom:3px;
margin-right:5px;
font-size: 28px;
`
const Icon4=styled(RiArrowDropUpLine)`
margin-bottom:3px;
margin-right:5px;
font-size: 28px;
`
const Divv=styled.div`
 height: 200px;
 width: 210px;
 background-color: blue;
 position:absolute;
 margin-top:30px;
 margin-right:30px;
`
const Divv2=styled.div`
 height: 200px;
 width: 210px;
 background-color: blue;
 position:absolute;
 margin-top:30px;
 margin-left:30px;
`