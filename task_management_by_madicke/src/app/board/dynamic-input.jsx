'use client'


import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {PlusIcon ,TrashIcon} from '@heroicons/react/24/solid'
const DynamicInput = ({type}) => {
  const [inputCount, setInputCount] = useState([{id:Date.now()*2}]);
  
  const handleAddInput = () => {
    setInputCount((prev) => [...prev, { id: Date.now() }]);
  };

  const handleDeleteInput = (id) => {
    setInputCount((prev) => prev.filter((input) => input.id !== id));
  };
'ownerproof-3480749-1701464923-361ca95b6572'
  return (
    <div >

      {inputCount.map((input) => (
        
       <div className="flex" key={input.id}>
        {console.log(input.id)}
       <Input className="mb-2" id={input.id} />{" "}
       <Button type="button" onClick={()=>handleDeleteInput(input.id)} >
         {" "}
         <TrashIcon height={20} />
       </Button>{" "}
     </div>
      ))}

      <Button
              type="button"
              onClick={handleAddInput}
              className="hover:bg-white w-full hover:text-black"
            >
              <PlusIcon height={20} />
              {type === 'columns'? 'Add column' : 'Add Subtask'}
            </Button>
    </div>
  );
};

export default DynamicInput;
