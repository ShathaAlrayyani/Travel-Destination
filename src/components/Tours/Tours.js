import '../Tours/Tours.css';

function Tour (props){

    return (
        <div>

            <p className="title"> {props.name}</p>
            <img className="img" src= {props.img} alt = {props.alt} />
            <br/>
            <br/>
            <br/>
            <br/>
            
        </div>
    )
}





export default Tour ;