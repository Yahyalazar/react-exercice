export default function Home(Props){
  return(
    <div  width="400px">

    <div style={{
    backgroundImage:`url(${Props.img})`,
    width:'400px',
    height:'400px',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    borderRadius:'10px',
    }}> </div>
        <div style={{display:'flex' , alignItems:'center',justifyContent:'space-between'  }}>
        <h3 style={{marginBottom:'0'}}>{Props.title}</h3>
        <h3>{Props.star}</h3>
        </div>
        <div style={{color:'gray', fontFamily:'-moz-initial'}}>
        <h3>{Props.disc}</h3>
        <h3>{Props.pays}</h3></div>
      
    </div>
    );
}