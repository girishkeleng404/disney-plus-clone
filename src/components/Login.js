import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
           <CTALogoOne src="images/cta-logo-one.svg"/>
           <SignUp>Get all </SignUp> 
           <Description>
           What is DSA?
The Digital Signature Algorithm  is a public-key cryptosystem and Federal Information Processing Standard for digital signatures based on the mathematical concept of modular exponentiati/</Description>
           <CTALogoTwo src="images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}


const Container = styled.div`
color: #fff;
position: relative;
// height:calc(100vh-70px);
display:flex;
height:100vh;
justify-content: center;
align-items: top;

&:before{
    background-position:top;
  
    background: url("/images/login.jpg") center center / cover no-repeat fixed; 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity:0.7;
    z-index: -1;
  }
 
}
`
const CTA = styled.div`
max-width:720px;
padding:80px 40px;
margin:auto;
width:70%;
display:flex;
flex-direction: column;
align-items: center;
margin-top:100px;


`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
width:100%;
background: #0063e5;
font-weight: bold;
padding:17px 0;
color: #f9f9f9;
border-radius:10px;
text-align: center;
margin-top:10px;
margin-bottom:10px;
font-size:18px;
cursor:pointer;
transition: all 250ms;
letter-spacing:1.5px;
&:hover{
  background: #0483ee;
}

`
const Description = styled.div`
font-size:12px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
margin-top:10px;
`
const CTALogoTwo =styled.img`
width:100%;
margin-top:30px;
`
export default Login

// 05:32:20