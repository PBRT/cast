// @flow

import React from "react";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import Input, { InputLabel } from "material-ui/Input";

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
