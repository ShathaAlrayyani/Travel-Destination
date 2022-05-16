import { Link } from "react-router-dom";

export default function Tour (props){
    console.log(props);
    
    return (

        {props.tourData.map((tour) => {
            return (
                <Link to={`/city/${tour.id}`} key={tour.id}>
                <div>
                  <h2>{tour.name}</h2>
                  <img src={tour.image} alt={tour.name} />
                </div>
              </Link>
            )
          })}

    )
}

