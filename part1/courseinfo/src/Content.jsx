import Part from './Part'

export default function Content ({part1 , exercises1, part2 , exercises2, part3 , exercises3 }) {
  return (
    <div>
      <Part part= {part1}  exercise= {exercises1}/>
      <Part part= {part2}  exercise= {exercises2}/>
      <Part part= {part3}  exercise= {exercises3}/>
    </div>
  );
}
