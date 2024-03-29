import React, { useState } from "react";
import styled from "styled-components";

function Review({ onSubmit, restaurant_id }) {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!reviewText.trim()) {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(
        `https://makterteste.fly.dev/api/v1/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurant_id,
            review_text: reviewText,
            review_date: new Date().toISOString().slice(0, 10),
            user_id: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      const newReview = await response.json();
      onSubmit(newReview.data);
      setReviewText("");
    } catch (error) {
      console.error("Error submitting review:", error.message);
      alert("리뷰 제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleTextChange = (event) => {
    setReviewText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <StyledTextarea
          name="review"
          placeholder="리뷰를 작성해주세요."
          value={reviewText}
          onChange={handleTextChange}
        />
      </label>
      <Button type="submit">리뷰 제출하기</Button>
    </form>
  );
}

export default Review;

const StyledTextarea = styled.textarea`
  width: 300px;
  height: 200px;
  margin: 10px 0;
  padding: 10px;
`;
