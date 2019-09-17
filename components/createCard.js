import { CardContent, Typography, Button, makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
   
    createButtons:{
        backgroundColor: '#1E5A49',
        textTransform: 'none',
        color: '#fff'
    }
}))

module.export  = {
    CreateCard,
    LoginTrigger
}

export function CreateCard(){
    const classes = useStyles()
    return (
        <Card className={classes.card} style={{ width:'250px', height:'150px'}}>
            <CardContent style={{display:'flex', flexDirection:'colume' }}>
                <Typography>
                    Employers do post jobs after account creation. You start by creating an account
                </Typography>
                <Button className={classes.createButtons} style={{alignSelf:'center', marginTop:'6px'}}>Create</Button>
            </CardContent>
        </Card>
    )
}

export function LoginTrigger(){
    const classes = useStyles()

    return (
        <Paper className={classes.card} style={{width:'100px', height:'100px', display:'flex', justifyContent:'space-around', alignSelf:'center'}}>
            <Button className={classes.createButtons} style={{alignSelf:'center'}}>
                Login
            </Button>
        </Paper>
    )
}