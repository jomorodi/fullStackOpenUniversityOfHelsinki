import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => 
    {
      const parts = course.parts ;
      const initialValue = 0;
      const total =   parts.reduce((s, p) => s + p.exercises , initialValue )
      return (
  
          <>
          <Header course={course.name} />
          <Content parts={course.parts} /> 
          <Total sum={total} />          
          </>       
  
      )
  
    }

export default Course