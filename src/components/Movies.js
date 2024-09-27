import React from 'react'
import styled from 'styled-components'

const Movies = () => {
  return (
    <Container>
        <h4>Recommended for you</h4>

        <Content>
            <Wrap>
                
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt=''/>
            </Wrap>
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg"  alt=''/>
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            <Wrap>
                <img src="https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg" alt='' />
            </Wrap>
            
            
        </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(6, minmax(0,1fr));


`
const Wrap = styled.div`
box-sizing: border-box;
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249, 249,249,0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
cursor:pointer;

img{
  width: 100%;
height: 100%;
object-fit: cover;
}

&:hover{
  border: 3px solid rgba(249, 249,249,0.6);
  box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.09)
}




`