import React from "react";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";

const CasualtiesOfWarSelect = ({ value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="casualtiesOfWar">
        Israeli casualties of war
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        inputProps={{
          name: "casualtiesOfWar",
          id: "casualtiesOfWar",
        }}
      >
        <option value="none"></option>
        <option value="emergency squad">Emergency Squad</option>
        <option value="IDF">IDF</option>
        <option value="police">Police</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CasualtiesOfWarSelect;
