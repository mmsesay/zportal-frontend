import Link from 'next/link';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

// style
const linkStyle = makeStyles( theme =>({
    button: {
      margin: theme.spacing(1),
      marginRight: '2px',
      textTransform: 'none',
      height:'64px',
      padding: '5px',
      transition: theme.transitions.create('fontWeight'),
      fontSize: '30px',
      fontStyle: 'Proxima Nova regular',
      color: '#ef891c',
      '&:hover':{
        color: '#ffffff',
        backgroundColor: '#1e5b49',
        fontWeight: 'bold',
      }
    },
}))
  
// header function
export default function Header(){
    const classes = linkStyle()
    return(
    <div style={{display:'flex', flexFlow:'wrap', marginRight: '100px'}}>
        <Link href="/">
        <Button color="secondary" className={classes.button}>Create</Button>
        </Link>
        <Link href="/">
        <Button color="secondary" className={classes.button}>Login</Button>
        </Link>
        <Link href="/">
        <Button color="secondary" className={classes.button}>Employee</Button>
        </Link>
        <Link href="/"> 
        <Button color="secondary" className={classes.button}>About</Button>
        </Link>
    </div>

    );
}