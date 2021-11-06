import './App.css';
import {Typography, AppBar, Toolbar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Container} from "@material-ui/core"
import { PhotoCamera } from "@material-ui/icons";

let App=()=> {
  return (
    <>
     <CssBaseline />
     <AppBar>
       <Toolbar position = "relative">
       <PhotoCamera />
       <Typography variant = "h6">Photo Album</Typography>
       </Toolbar>
     </AppBar>
    </>
  );
}

export default App;
