import { CardContent, Typography, Button } from "@material-ui/core"

export default logCreateTriggers = {
    CreateCard,
    LoginTrigger
}


function CreateCard(){
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography>
                    Employers do post jobs after account creation. You start by creating an account
                </Typography>
                <Button className={classes.createButtons}>Create</Button>
            </CardContent>
        </Card>
    )
}

function LoginTrigger(){
    const classes = useStyles()

    return (
        <Paper>
            <Button>
                Login
            </Button>
        </Paper>
    )
}