import React, { useState, useEffect } from "react";
import Card from "../Card";
import styled from "styled-components";
import { Link } from "react-router-dom";

function CoursesCards() {
  useEffect(() => {
    fetchData();
  }, []);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://192.168.1.116:8000/api/courses");
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };
  return (
    <CourseCardsWrapper>
      {items.map((item) => (
        <div key={item.courses_id}>
          <Link to={`/course/${item.courses_id}`}>
            <Card
              title={item.title}
              img={item.img}
              instracturimg={item.instructors["0"].img}
              instracturname={item.instructors["0"].name}
              bgcolor={item.color.color}
            />
          </Link>
        </div>
      ))}
    </CourseCardsWrapper>
  );
}

export default CoursesCards;
const CourseCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 0px auto 0px;
  margin-bottom: 100px;

  @media (max-width: 1270px) {
    margin: 0px auto;
    width: 650px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1300px) {
    margin: 0px auto;
    width: 650px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
    margin: auto auto;
    width: 500px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
    margin: auto auto;
    width: 587px;
    padding: 0px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    margin: auto auto;
    width: 364px;
    padding: 0px;
  }
`;
