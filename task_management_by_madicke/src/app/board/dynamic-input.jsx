"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const DynamicInput = ({ type }) => {
  const [inputCount, setInputCount] = useState([
    { id: Date.now() * 2, value: "" },
  ]);

  const handleChange = (id, e) => {
    const updatedInputs = inputCount.map((item) => {
      if (item.id === id) {
        return { ...item, value: e.target.value };
      }
      return item;
    });
    console.log(updatedInputs);

    setInputCount(updatedInputs);
  };

  const handleAddInput = () => {
    setInputCount((prev) => [...prev, { id: Date.now(), value: "" }]);
  };

  const handleDeleteInput = (id) => {
    setInputCount((prev) => prev.filter((input) => input.id !== id));
  };

  return (
    <div>
      {inputCount.map((input) => (
        <div className="flex" key={input.id}>
          <Input
            className="mb-2"
            id={input.id}
            value={input.value}
            onChange={(e) => handleChange(input.id, e)}
          />
          <Button type="button" onClick={() => handleDeleteInput(input.id)}>
            <TrashIcon height={20} />
          </Button>
        </div>
      ))}
      <Input name={`${type==='columns' ? 'columns' :'subtasks'}`} value={JSON.stringify(inputCount)} className="hidden"/>
      <Button
        type="button"
        onClick={handleAddInput}
        className="hover:bg-white w-full hover:text-black"
      >
        <PlusIcon height={20} />
        {type === "columns" ? "Add column" : "Add Subtask"}
      </Button>
    </div>
  );
};

export default DynamicInput;
