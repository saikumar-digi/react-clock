import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'

function App() {
  const [time , setTime] = useState(new Date());
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date())
    },1000)
  })
  return (
    <div style={{backgroundColor:'pink',display:"inline-block",top:"50%",left:"50%",position:"absolute",
    transform:"translate(-50%,-50%)",padding:"12vh"
    }}>
  
    <Clock value={time}  size={300} renderNumbers={true}/>
    </div>
  );
}

export default App;
