import React from "react";
import styled from "styled-components";

import image1 from "../../Images/1.jpg";
import image2 from "../../Images/2.jpg";
import image3 from "../../Images/3.jpg";
import image4 from "../../Images/4.jpg";
import image5 from "../../Images/5.jpg";

function Main() {
  // 이미지 배열과 각 이미지의 회전 각도 배열
  const images = [image5, image2, image3, image4, image1];
  const rotationAngles = [20, 340, 20, 340, 20]; // 각 이미지의 회전 각도

  return (
    <Container>
      <ImgBox>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <ImageOverlay>
              <Caption>Restaurant {index + 1}</Caption>
            </ImageOverlay>
            <RotatedImage
              src={image}
              alt={`Restaurant ${index + 1}`}
              rotationAngle={rotationAngles[index]}
            />
          </ImageContainer>
        ))}
      </ImgBox>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  height: 50%;
`;

const ImgBox = styled.div`
  width: 100%; /* Carousel의 너비를 70%로 설정 */
  /* 이미지 상자를 아래로 20px 내림 */
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%; /* 이미지 컨테이너의 너비 설정 */
  height: 0; /* 높이를 0으로 설정하여 이미지 비율을 유지 */
  padding-top: 56.25%; /* 16:9 이미지 비율에 대응하는 패딩값 (9 / 16 * 100) */
  overflow: hidden; /* 넘치는 이미지를 자르기 위해 숨김 처리 */
  transition: transform 0.3s ease; /* 이미지에 마우스를 가져갈 때 애니메이션 효과 적용 */
  &:hover {
    transform: scale(1.05); /* 마우스를 가져갈 때 이미지 확대 */
  }
`;

const RotatedImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 이미지가 컨테이너를 채우도록 설정 */
  height: 100%; /* 이미지가 컨테이너를 채우도록 설정 */
  object-fit: cover; /* 이미지를 비율을 유지하면서 컨테이너에 맞추기 */
  transform: rotate(${(props) => props.rotationAngle}deg); /* 이미지를 회전 */
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* 이미지 위에 하얀 오버레이 */
  transition: opacity 0.3s ease; /* 이미지에 마우스를 가져갈 때 애니메이션 효과 적용 */
  opacity: 0; /* 초기에는 투명하게 설정 */
  ${ImageContainer}:hover & {
    opacity: 1; /* 이미지에 마우스를 가져갈 때 흰색 오버레이 나타남 */
  }
`;

const Caption = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
export default Main;
