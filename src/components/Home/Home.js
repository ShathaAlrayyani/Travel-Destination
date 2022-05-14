import Header from "../Headers/Header";
import Tour from "../Tours/Tours";
import Footer from "../Footer/Footer"; 
import '../Home/Home.css'


const tourData = require('../../Data/db.json');

function Home (props){

    return(
        <>
        <Header/>

        <div className="home">
        {
        tourData.map(tour =>{
            return(
                < Tour img={tour.image}
                 alt={tour.info}
                 name={tour.name} />
            )
            })
        
        }
        </div>
        
        <Footer/>
        </>
    )

}




    export default Home;