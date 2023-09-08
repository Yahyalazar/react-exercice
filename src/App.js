import {data} from "./data"
import Home from "./home"
export default function App(){
  const showData = data.map((show)=><Home 
  img= {show.img}
  title = {show.title}
  pays = {show.pays}
  disc = {show.disc}
  star = {show.star}/>)
  return(
    <div style={{
      display: "grid",
      gridTemplateColumns: "auto auto auto auto",
      gap:"15px"
    }}>{showData}</div>
    )
}