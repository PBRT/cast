/* @flow */
import type { SupportedInputs } from "../create-story.container.jsx";

import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./form.css";

type HandleChange = (key: string, val: string) => void;
type StoryTextInputProps = {
  inputKey: string,
  value: SupportedInputs,
  label: string,
  handleChange: HandleChange,
  style?: Object,
  inputType: "date" | "text",
  defaultValue?: string,
  rows?: number,
  multiline?: boolean
};
type Props = {
  handleChange: HandleChange,
  values: {
    [string]: SupportedInputs
  }
};

class StoryTextInput extends Component<StoryTextInputProps> {
  render() {
    const {
      inputKey,
      label,
      value,
      style,
      inputType,
      defaultValue,
      rows,
      multiline
    } = this.props;
    return (
      <TextField
        id={inputKey}
        label={label}
        type={inputType}
        value={value || ""}
        defaultValue={defaultValue}
        onChange={this._onChange}
        rows={rows || 1}
        multiline={multiline != null ? multiline : false}
        style={{
          ...(style || {}),
          ...{ width: "100%", marginBottom: 20 }
        }}
      />
    );
  }

  _onChange = (e: Object) => {
    this.props.handleChange(this.props.inputKey, e.target.value);
  };
}

const CreateStoryForm = (props: Props) => {


  return (
    <div className="form-container">
      <form action="/stories" noValidate autoComplete="off" encType="multipart/form-data">
        <StoryTextInput
          label="Username"
          inputKey="username"
          inputType="text"
          value={props.values.username}
          handleChange={props.handleChange}
        />
        <StoryTextInput
          label="Title"
          inputKey="title"
          inputType="text"
          value={props.values.title}
          handleChange={props.handleChange}
        />
        <StoryTextInput
          label=""
          inputType="date"
          inputKey="timestamp"
          value={props.values.timestamp}
          handleChange={props.handleChange}
        />
        <StoryTextInput
          label="Description"
          inputKey="description"
          inputType="text"
          rows={4}
          multiline={true}
          value={props.values.description}
          handleChange={props.handleChange}
        />
        <input 
          name="uploadImg"
          type="file"
          onChange={props.handleImageChange} />
        
      </form>
    </div>
  );
};

CreateStoryForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default CreateStoryForm;
