import React, { useState } from "react";

const useInputValue = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};
export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
};
