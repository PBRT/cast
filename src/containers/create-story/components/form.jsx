/* @flow */
import type { SupportedInputs } from "../create-story.container.jsx";
import TextField from "material-ui/TextField";
import React, { Component } from "react";

type HandleChange = (key: string, val: string) => void;
type StoryTextInputProps = {
  inputKey: string,
  value: SupportedInputs,
  label: string,
  handleChange: HandleChange,
  style?: Object,
  inputType: "date" | "text",
  defaultValue?: string
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
      defaultValue
    } = this.props;
    return (
      <TextField
        id={inputKey}
        label={label}
        type={inputType}
        value={value || ""}
        defaultValue={defaultValue}
        onChange={this._onChange}
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
    <div style={{ width: 400, margin: "auto" }}>
      <form noValidate autoComplete="off">
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
          value={props.values.description}
          handleChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default CreateStoryForm;
