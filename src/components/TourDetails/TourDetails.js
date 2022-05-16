import { useParams } from "react-router-dom";
const tourData = require('../../Data/db.json');

export default function TourDetails() {
      //1.getting pet id
        let { id} = useParams();
        //2.filtering for the wanted data
        let result = tourData.filter(data => data.id === id)
        console.log(result);
        //3/render its data 
        return (
          <>
            <div key={result[0].id}>
              <img src={result[0].image} alt={result[0].name} />
              <ul>
                <li>Price : {result[0].price}</li>
                <li> Name :{result[0].name} </li>
                <li> Information :{result[0].name} </li>
                
              </ul>
            </div>
          </>
        );
    
      
    }
    