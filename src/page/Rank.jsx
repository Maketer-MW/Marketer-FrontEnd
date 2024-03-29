import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Rank() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://makterteste.fly.dev/api/v1/restaurants")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const sortedData = [...data.data].sort((a, b) => b.rating - a.rating);

          setSearchResults(sortedData.slice(0, 10));
        } else {
          console.error("API 응답에 문제가 있습니다:", data);
        }
      });
  }, []);

  return (
    <div>
      <h1>Top 10 Restaurants</h1>
      <ul>
        {searchResults.map((restaurant) => (
          <Box key={restaurant.restaurants_id}>
            <li>
              {restaurant.restaurants_name} - 평점: {restaurant.rating}
              <img src={restaurant.image} alt={restaurant.restaurants_name} />
            </li>
          </Box>
        ))}
      </ul>
    </div>
  );
}

export default Rank;

const Box = styled.div`
  width: 400px;

  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  p,
  pre,
  h2 {
    font-size: 20px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
  }
  img {
    max-width: 90%;
    height: auto;
  }
`;
