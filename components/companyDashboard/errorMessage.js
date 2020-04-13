import React from 'react'
import Popover from '@material-ui/core/Popover'




function  ErrorMessage (props) {
  console.log(props.feildRequired)

//   const getEl = (elId) => setTimeout(document.getElementById(elId), 0)
  
    return (
      <div style={{position:'absolute'}}>
      <Popover
        id={props.feildRequired}
        open={Boolean(props.feildRequired)}
        // anchorEl={getEl(props.feildRequired)}
        onClose={props.handleClose}
        anchorOrigin={{vertical:'bottom', horizontal:'center'}}
        transformOrigin={{vertical:'top', horizontal:'center'}}
      >
        <p>Field is empty</p>
      </Popover>
      </div>
    )}

export default ErrorMessage