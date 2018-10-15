import React from "react";

import TextField from "@material-ui/core/TextField";


import "./search.css"



const SearchField = (props: Props) => {


  return(  
    <div className="search-container animated bounce">
      <h3 className="hideOnMobile">Quelle histoire ça aussi...</h3>
      <div className="textfield-container">
        <TextField
          id="outlined-dense"
          label="Title"
          type="search"
          margin="dense"
          variant="outlined"
          value={props.value}
          onChange={props.handlechange}
          className= "textField"
        />
      </div>
    </div>
    )
}


  
  export default SearchField;


