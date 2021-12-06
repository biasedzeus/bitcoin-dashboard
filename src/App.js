import './App.css';
import NavBar from './Components/NavBar';
import { Grid } from '@material-ui/core';
import SideMenu from './Components/SideMenu';
import Charts from './Components/Charts';

function App() {
  return (
    <div className="Apsp">
      <div className="navbddar-container">
      <NavBar/>

      </div>
      <br/>
     <div>
     <Grid container spacing={5}>
        <Grid item xs={2}><SideMenu/></Grid>
        <Grid id="big-grid" item xs={10}>
          <div style={{width:'100%',height:'48%',marginBottom:'2%'}}>
           <Charts/>
          </div>
          <div style={{width:'100%',height:'48%'}}>
           <Charts/>


          </div>


        </Grid>
        </Grid>
     </div>
    </div>
  );
}

export default App;
