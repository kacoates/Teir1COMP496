import React, {useState, useEffect} from 'react'
import Recommendations from '../Recommendations/Recommendations';
import "./TableList.css";

function TableList() {
  const [time, setTime] = useState(Date.now());

  // Update constantly
  useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 1000);
  return () => {
    clearInterval(interval);
  };
}, []);

  // Return the list of recommendations... using map of recommendations
  return (
    <div class="Table">
         <table>
          <thead>
             <tr> 
               <th>Movie</th>
               <th>Genre</th>
             </tr>
          </thead>
          <tbody>
             {Recommendations._recs.map(( rec, index ) => {
              return (
            <tr key={index}>
              <td>{rec.title}</td>
              <td>{rec.genres}</td>
            </tr>
          );
        })}
        </tbody>
           </table>
         </div>
  );
}
    
export default TableList;