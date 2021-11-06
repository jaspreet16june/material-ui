import './App.css';
import {Typography, AppBar, Toolbar, Card, CardContent,Button, CardActions, CardMedia, CssBaseline, Grid, Container} from "@material-ui/core"
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style"
const cards= [1,2,3,4,5,6,7,8,9,10]
let App=()=> {
let classes = useStyles();
  return (
    <>
     <CssBaseline />
     <AppBar>
       <Toolbar position = "relative">
       <PhotoCamera className={classes.icon}/>
       <Typography variant = "h6">Photo Album</Typography>
       </Toolbar>
     </AppBar>

     <main>
       <div className = {classes.container}>
         <Container maxWidth = "sm">
            <Typography variant = "h2" align="center" color="textPrimary" gutterBottom >Photo Album</Typography>
            <Typography variant = "h5" align ="center" color ="textSecondary" paragraph>
              Hello This is my photo album where i am using paragraph property and align items center property this is my paragraph I am going to use paragraph property here to see the changes in the paragraph ad gutterBottom property 
              </Typography>

            <div className ={classes.Button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant = "contained" color="primary">
                        See my photos
                  </Button>
                </Grid>
                 <Grid item>
                  <Button variant = "contained" color="primary">
                        Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
         </Container>
       </div>
       <Container className ={classes.cardGrid} maxWidth= "md">
         <Grid container spacing ={4}>
           {cards.map((card)=>(

           <Grid item key = {card} xs ={12} sm ={6} md ={4} > 
           <Card className = {classes.card} >
              <CardMedia 
              className ={classes.media}
              image ="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
              title="Flowers"/>

              <CardContent className = {classes.cardContent}>
                <Typography variant = "h5" gutterBottom>Heading</Typography>
                <Typography>This is the media card. You can use this section for adding media</Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size ="small" color="primary">Edit</Button>
              </CardActions>
           </Card>
           </Grid>
           ))}
         </Grid>
       </Container>
     </main>
    </>
  );
}

export default App;
