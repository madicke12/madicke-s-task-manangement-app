'use client'


import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {PlusIcon ,TrashIcon} from '@heroicons/react/24/solid'
const DynamicInput = ({type}) => {
  const [inputValue , setInputValue] = useState()
  const [inputCount, setInputCount] = useState([{id:Date.now()*2 ,value:null}]);

  const handleChange =(id,e)=>{
    
    console.log(id)
    setInputValue(e.target.value)
    inputCount.forEach((item)=>{
      if(item.id === id ){
        setInputCount((prev)=>{
          prev.forEach()
        })
      }
    })
    setInputCount((prev )=>{
      prev.forEach((item)=>{
       { item.value= inputValue }
      })
    })
    console.log(inputValue)
    console.log(inputCount)
  }
  const handleAddInput = () => {
    setInputCount((prev) => [...prev, { id: Date.now() }]);
  };

  const handleDeleteInput = (id) => {
    setInputCount((prev) => prev.filter((input) => input.id !== id));
  };

  return (
    <div >

      {inputCount.map((input) => (
        
       <div className="flex" key={input.id}>
        {console.log(input.id)}
       <Input className="mb-2" id={input.id} onChange={(e)=>handleChange(input.id,e)} />{" "}
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
