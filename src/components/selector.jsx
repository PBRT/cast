// @flow

import React from "react";
import { MenuItem } from "@material-ui/core/Menu";
import { FormControl } from "@material-ui/core/Form";
import Select from "@material-ui/core/Select";
import Input, { InputLabel } from "@material-ui/core/Input";

type Props = {
  handleChange: (name: string, value: string) => void,
  value: string,
  name: string,
  label: string,
  list: Array<string>
};

const Selector = (props: Props) => (
  <FormControl>
    <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
    <Select
      value={props.value}
      onChange={(e: Object) => props.handleChange(props.name, e.target.value)}
      input={<Input name={props.name} id={props.name} />}
    >
      {props.list.map((item: string, key: number) => (
        <MenuItem value={item} key={key}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Selector;
