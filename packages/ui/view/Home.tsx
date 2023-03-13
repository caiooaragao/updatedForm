import {LogoInicial} from "../atomos/LogoInicial/LogoInicial"
import LoginForm from "../organismos/LoginForm"

export const Home = () => {
  return (
    <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                <LogoInicial/>
                <LoginForm/>
            </div>
        </div>
    </div>

//     <div className="card">
  
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

  )
}