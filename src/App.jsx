import React from 'react';
import{ Typography ,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons' ;

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles=makeStyles((theme)=>({
//     container:{
//     backgroundColor:theme.palette.background.paper,
//     padding: theme.spacing(8,0,6)
//     }


    

// }));
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles from './styles';

const cards=[1,2,3,4,5,6,7,8,9]
 
const App=() =>  {
    const classes=useStyles();

  return (
    <div>
        {/* <Typography variant="h1">Hello w</Typography> */}
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" style={{marginTop:'100px'}}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album 
                        </Typography>
                        <Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello ALLL  this is photo album  ,
                        and i'm typing to make this sentence as long as possible,
                        so we can see how does it look like 
                        </Typography>
                        </Typography>
                        <div className={classes.button}>
                            <grid Container spacing={2} justify="center">
                                <grid item>
                                    <Button variant="contained" color="primary">
                                            see my photos
                                    </Button>
                                </grid>
                                <grid item>
                                    <Button variant="outlined" color="primary">
                                            secondary action
                                    </Button>
                                </grid>
                            </grid>
                        </div>
                </Container>
            </div>
            <container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6}>
                    <card className={classes.card}>
                         <cardMedia
                         className={classes.cardMedia}
                         image="https://source.unsplash.com/random" title="Image title"
                         />
                         <cardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                                heading
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to descrbe th content
                            </Typography>
                         </cardContent>
                         <cardActions>
                            <Button size="small" color="primary">view</Button>
                            <Button size="small" color="primary">Edit</Button>
                            <Button size="small" color="primary">view</Button>
                         </cardActions>
                    </card>
                    
                </Grid>
                    ))}
                    
                    <Grid item>
                        <card className={classes.card}>
                             <cardMedia
                             className={classes.cardMedia}
                             image="https://source.unsplash.com/random" title="Image title"
                             />
                             <cardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    heading
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to descrbe th content
                                </Typography>
                             </cardContent>
                             <cardActions>
                                <Button size="small" color="primary">view</Button>
                                <Button size="small" color="primary">Edit</Button>
                                <Button size="small" color="primary">view</Button>
                             </cardActions>
                        </card>
                        
                    </Grid>
                </Grid>
            </container>
            
            {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Twoo</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
        </main>

    </div>
   );
}

export default App;