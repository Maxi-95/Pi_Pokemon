//import s from "./Home.module.css"
import CardContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemones } from "../../Redux/Actions/actions.jsx";



function Home() {
  const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch( getPokemones() )
    },[dispatch])

  return (
    <div>
      <CardContainer/>
    </div>
  );
}

export default Home;