import Header from "../Headers/Header";
import Tour from "../Tours/Tours";
import Footer from "../Footer/Footer"; 

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