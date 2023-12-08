import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 16px;
`;

const Title = styled.h2`
  font-size: 50px;
  color: #333;
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  font-size: 30px;
  color: #666;
  margin-bottom: 4px;
`;

function FoodIndex({ restaurant }) {
  // prop 이름 변경
  return (
    <div>
      <Title>{restaurant.name}</Title>
      <InfoText>주소: {restaurant.address}</InfoText>
      <InfoText>전화번호: {restaurant.phone}</InfoText>
      <InfoText>영업 시간: {restaurant.openingHours}</InfoText>
      <InfoText>맛: {restaurant.tasteInfo}</InfoText>
      <InfoText>카테고리: {restaurant.category}</InfoText>
      <InfoText>별 점: {restaurant.rating}</InfoText>
    </div>
  );
}

export default FoodIndex;
