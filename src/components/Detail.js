import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="images/ins1.jpg" alt="" />
      </Background>
      <ImageTitle>
        {/* <img src="images/inspng.png" alt="" /> */}
        <img src='images/Interstellar-logo.png'alt=''/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          {" "}
          <img src="images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/group-icon.png " alt="" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>CBFC: U/A  2014 ‧ Sci-fi/Adventure ‧ 2h 49m</SubTitle>
      <Description>
        A team of explorers travel through a wormhole in space in an attempt to
        ensure humanity's survival
      </Description>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw +5px);
  position: relative;
  padding: 0 50px;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100vw;
    // height:100vh;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 250px;
  // margin:auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 27px;
  margin-right: 27px;
  color: black;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid white;
  color: white;

  &:hover {
    background: rgb(0, 0, 0, 0.7);
  }
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid white;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0, 0.8);
`;
const SubTitle = styled.div`
  color: white;
  font-size: 15px;
  min-height: 28px;
  margin-top: 26px;
  opacity: 0.7;
`;
const Description = styled.div`
  color: white;
  line-height: 1.4;
  font-size: 16px;
  margin-top: 16px;
`;
export default Detail;
