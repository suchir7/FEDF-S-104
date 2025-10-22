import {useState} from "react";
function Student(props){
  return <h2>{props.name} scored {props.score} marks</h2>;
}
function App(){
   const[marks,setMarks]=useState(85);
   return(
    <div>
      <Student name="Suchir" score={marks}/>
      <button onClick={()=>setMarks(marks+5)}>
        increase marks
      </button>
    </div>
   );
}
export default App;