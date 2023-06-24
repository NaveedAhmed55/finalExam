import React, { useEffect } from 'react'

function Form() {
    const Handler=()=>{
      useEffect((event) => {
        fetch('http://localhost:4000//recipe/save', {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function(response) {
                console.log(response)
                return response.json();
            });
     
            event.preventDefault();
        }, []);
    }
  
  return (
    <div>
       <form method='post' onSubmit={Handler} action='/recipe/save' className='flex flex-col border-slate-800'>
       <label htmlFor='title'>Enter Title
        <input className='border-2 border-gray-800 ml-12' name="title" type='text'></input></label>

        <label htmlFor='description'>Enter description
        <input className='border-2 border-gray-800' name="description" type='text'></input></label>

        <label htmlFor='ingredients'>Enter ingredients
        <input className='border-2 border-gray-800' name="ingredients" type='text'></input></label>

        <label htmlFor='instructions'>Enter instructions
        <input className='border-2 border-gray-800' name="instructions" type='text'></input></label>

        <button type='submit' className='w-24 bg-slate-700 ml-24 mt-10'>submit</button>
       </form>
    </div>
  )
}

export default Form;
