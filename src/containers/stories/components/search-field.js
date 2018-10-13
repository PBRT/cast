import React from "react";
import PropTypes from 'prop-types';

import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: 50,
    width: "100%",
    fontSize: "200%",
    height: 50,
    margin: "25px",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const searchStyle = {
  width: "50%",
  borderRadius: 10,
  border: "2px solid #fa983a",
  margin: "auto",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-around",
  boxShadow: "-1px 9px 16px -8px rgba(0,0,0,0.75)",
  color: "black",
}


const SearchField = (props: Props) => {

  const { classes } = props;

  return(  
    <div style={searchStyle}>
      <h3 style={{ width: "40%", margin: "auto" }}>Quelle histoire ça aussi...</h3>
      <div style={{ width: "50%" }}>
        <TextField
          id="outlined-dense"
          label="Title"
          type="search"
          margin="dense"
          variant="outlined"
          value={props.value}
          onChange={props.handlechange}
          className={classNames(classes.textField, classes.dense)}
        />
      </div>
      <div style={{ width: "10%", margin: "auto" }}>
        <FontAwesomeIcon id="search-icon" icon="search" />
      </div>
    </div>
    )
}


SearchField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SearchField);


