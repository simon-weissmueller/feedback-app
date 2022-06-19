import { useEffect, useState } from 'react';


const Vote =  () => {
    
    const [count, setCount] = useState(0);

  function handleGreatButton(e) {
    setCount(count + 1)
    }
  
  function handleBoringButton(e) {
    setCount(count -1)
  }

    return(
        <>
        <h1>How do you like the lecture?</h1>
        <div className='buttons'>
        <button className="button" id="left" onClick={handleGreatButton}>It's great!</button>
        <button className="button" id="middle" onClick={() => setCount(0)} >Ok'ish</button>
        <button className="button" id="right" onClick={handleBoringButton}>Boring!</button>
        <h2>Total score: {count}</h2> 
        </div>
        </>
    );
}

export default Vote;