import React, {useState, useEffect} from 'react'
import Recommendations from '../Recommendations/Recommendations';
import "./TableList.css";
import FaveArray from '../FaveArray/FaveArray';

function TableList() {
  const [time, setTime] = useState(Date.now());

  // Update constantly
  useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 100);
  return () => {
    clearInterval(interval);
  };
}, []);
  if (Recommendations._recs.length == 0) {
    if(FaveArray._fav_movies.length < 5) 
      return (<h1 className='Counter_NotReady'>Select {5 - FaveArray._fav_movies.length} More Favorites</h1>)
    else
      return (<h1 className='Counter_Ready'>Ready!</h1>)
  }
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