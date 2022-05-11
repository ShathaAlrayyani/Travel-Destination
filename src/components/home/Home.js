import Header from "../header/Header";
import Tour from "../tours/Tours";
import Footer from "../footer/Footer"; 

const tourData = require('../../Data/db.json');


function Home (props){

    return(
        <>
        <Header/>

        {
        tourData.map(tour =>{
            return(
                <Tour img={tour.image}
                 alt={tour.info}
                 name={tour.name} />
            )
            })
        
        }
        
        <Footer/>
        </>
    )

}




    export default Home;