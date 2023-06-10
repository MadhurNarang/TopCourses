import React, { useState } from "react";

import Card from "./Card";

const Cards = (props) => {

  const courses = props.courses;
  const category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);

  function getAllCourse() {

    if (category === "All") {

      let allCourse = [];

      //for each is only applied to arrays directly
      Object.values(courses).forEach((course) => {
        course.forEach((courseData) => {
          allCourse.push(courseData);
        });
      });

      return allCourse;

    }
    else
    {
      return courses[category];
    }
    
  }

  return (

    <div className="flex flex-wrap justify-center gap-4 mb-4">

      {
        getAllCourse()?.map((course) => {
            return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />)
          }
        )
      }

    </div>

  );

};

export default Cards;
