import { makeStyles} from "@material-ui/core/styles"
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({

    container :{
      backgroundColor:red,
      padding:theme.spacing(8,0,6)
    },
    icon:{
      marginRight:'20px'
    },
    Button:{
      marginTop:'40px'
    },
    cardGrid:{
        padding:'20px 0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:"column"
    },
    media:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1
    },
}))

export default useStyles;