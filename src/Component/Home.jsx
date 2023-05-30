import "./Home.css";
import Img from "../png/Home.png";
function Home () {
    return(
        <div>
              <div className="flex">
        <div className="container">
            <h1>how to start your own bussiness ! <br/>
                Will you ready ?</h1>
            <p>WE help individuals or Organizations to start their
               business or start-up by giving them indepth theory <br/>
               and practical sessions.</p>
               <button>Join Now</button>       
        </div>
        <div className="homeimg">
            <img src={Img} alt="" />
        </div>
        </div>
        </div>
    )
}
export default Home;