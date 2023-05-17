import React from "react"
import styled from "styled-components"
import img1 from "../Assets/share1.png"
import img2 from "../Assets/share2.png"
import {CiApple,CiHome} from "react-icons/ci"
import {GiEyelashes,GiSmartphone} from "react-icons/gi"
import {MdArrowDropDownCircle} from "react-icons/md"
import {HiOutlineComputerDesktop} from "react-icons/hi2"
import {SlScreenDesktop} from "react-icons/sl"
import {IoMdArrowDropleftCircle,IoMdArrowDroprightCircle} from "react-icons/io"
import {useState, useEffect} from "react"
import imgg1 from "../Assets/Desktop_Homepage_Slider__712x384.png"
import imgg2 from "../Assets/Desktop_Homepage_Slider__712x384_copy_2.png"
// import imgg3 from "../Assets/Desktop_MLP_Slider__1168x384_copy_2.png"
import imgg4 from "../Assets/Infinix_712x384.png"
import imgg5 from "../Assets/Slider.png"

const HomePage=()=>{

    const Image=[imgg1, imgg2, imgg4, imgg5]
    const [toggle,setToggle]=useState<number>(0)
    const onToggle=()=>{
        setToggle((el)=>{
            return el+1
        }
        )
    }
    const onTug=()=>{
        setToggle((el)=>{
            return el-1
        }
        )
    }
useEffect(()=>{
    setInterval(()=>{
        setToggle((el)=>{
            return el+1
        })
    },5000)
},[])
   
    return(
        <div>
            <Container>
                <Main>
                  <HoverOn>
                  <Nav><Icon1/><div>Supermarket</div></Nav>
                  <Nav><Icon2/><div>Health & Beauty</div></Nav>
                  <Nav><Icon3/><div>Home & Office</div></Nav>
                  <Nav><Icon4/><div>Phones & Tablets</div></Nav>
                  <Nav><Icon5/><div>Computing</div></Nav>
                  <Nav><Icon6/><div>Electronics</div></Nav>
                  <Nav><Icon7/><div>Fashion</div></Nav>
                  <Nav><Icon8/><div>Baby Products</div></Nav>
                  <Nav><Icon9/><div>Gaming</div></Nav>
                  <Nav><Icon10/><div>Sporting Goods</div></Nav>
                  </HoverOn>
                  <Counting>
                   <Img src={Image[toggle%Image.length]}></Img>
                   <Count>
                    <Icon onClick={onToggle}/>
                    <Econ onClick={onTug}/>
                    </Count>
                  </Counting>
                  <Share>
                    <One src={img1}></One>
                    <Two src={img2}></Two>
                  </Share>
                </Main>
                <Main2>
                    <Counting>
                   <Img src={Image[toggle%Image.length]}></Img>
                   <Count>
                    <Icon onClick={onToggle}/>
                    <Econ onClick={onTug}/>
                    </Count>
                  </Counting>
                </Main2>
                <Main3></Main3>
                </Container>
        </div>
    )
}

export default HomePage
const Container=styled.div`
min-height:500px;
width:100%;
background-color: #f1f1f2;`
const Main=styled.div`
padding: 0px 30px;
height:100%;
display:flex;
flex-direction: row;
align-items:center;

@media screen and (max-width: 700){
    display:none;
}
/* justify-content:space-between; */
/* padding:0px 3px; */
`
const Main2=styled.div`
padding: 0px 30px;
height:100%;
display:none;
flex-direction: row;
align-items:center;

@media screen and (max-width:700px){
   display:block; 
}
/* justify-content:space-between; */
/* padding:0px 3px; */
`
const Main3=styled.div`
padding: 0px 30px;
height:100%;
display:flex;
flex-direction: row;
align-items:center;
/* justify-content:space-between; */
/* padding:0px 3px; */
`
const HoverOn=styled.div`
width:20%;
height:430px;
background-color:white;
margin-top:35px;
margin-left: 60px;
margin-right:20px;
display:flex;
flex-direction:column;

`
const Img =styled.img`
height: 430px;
width:100%;
object-fit:cover;
position: relative;`
const Count=styled.div`
position:absolute;`
const Counting=styled.div`
width:50%;
height:430px;
background-color:white;
margin-top:35px;
margin-right:20px;
display:flex;
align-items:center;
`
const Share=styled.div`
width:20%;
height:430px;
background-color:white;
margin-top:35px;
margin-right: 60px;
display:flex;
flex-direction:column;
`
const One=styled.img`
height: 49%;
width:100%;
object-fit:cover;
/* background-color:blue; */
`
const Two=styled.img`
height: 49%;
width:100%;
object-fit:cover;
/* background-color: pink; */
/* margin-top: 10px; */
`
const Nav=styled.div`
color: black;
font-weight:400;
display:flex;
margin: 10px 10px;
/* margin:15px; */
:hover{
    cursor: pointer;
    color: #ff9900;
}

div{
 font-size: 15px;
}
`
const Icon1=styled(CiApple)`
margin-top:1px;
margin-right:5px;
font-size: 20px;`
const Icon2=styled(GiEyelashes)`
margin-top:1px;
margin-right:5px;
font-size: 20px;`
const Icon3=styled(CiHome)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon4=styled(GiSmartphone)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon5=styled(HiOutlineComputerDesktop)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon6=styled(SlScreenDesktop)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon7=styled(GiSmartphone)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon8=styled(GiSmartphone)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon9=styled(GiSmartphone)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon10=styled(GiSmartphone)`
margin-top:1px;
margin-right:5px;
font-size: 20px; 
`
const Icon=styled(IoMdArrowDropleftCircle)`
margin-right:320px;
color:gray;
font-size: 50px;
`
const Econ=styled(IoMdArrowDroprightCircle)`
flex:1;
font-size:50px;
color:gray;
margin-left:300px;
`