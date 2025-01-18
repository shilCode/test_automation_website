import { useState } from "react";

const AddRemoveElement = () => {
  const [buttons, setButtons] = useState<number[]>([]);

  const addButton = () => {
    setButtons([...buttons, buttons.length]);
  };

  const removeButton = (index: number) => {
    setButtons(buttons.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={addButton}>Add a button</button>
      {buttons.map((button, index) => (
        <div key={index}>
          <button onClick={() => removeButton(index)}>
            Delete Me {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};


export default AddRemoveElement;
