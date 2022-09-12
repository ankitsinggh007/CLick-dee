import {useState} from "react"
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer.js/Footer";
import MainContainer from "./Components/MainContainer/MainContainer";
import CompanyRatings from "./Components/CompanyRatings/CompanyRatings";
import MainForm from "./Components/MainForm/MainForm";
import CongratsPage from "./Components/CongratulationComponent/CongratsPage";

function App() {
  const [bio, setbio] = useState({
    showConratesPage:false,
    name:"",
  });
  
  return (
    <div >
      {!bio.showConratesPage &&
      <div>
         <NavBar/>
      <MainForm setstate={setbio} />
      <MainContainer />
      <CompanyRatings />
      <Footer/>
      </div>
      }

{   bio.showConratesPage &&   <CongratsPage name={bio.name}/>}
    </div>
  );
}
export default App;
