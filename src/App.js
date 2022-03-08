import React from 'react';

function App() {
  const [data, setData] = React.useState(null)
  const [toggle, setToggle] = React.useState(false)

  const onClick = () => setToggle (prev => !prev)

  React.useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100);
  }, [])

  return (
    <div >
      {toggle === true  && <div>toggle</div> }
      {data && <div style={{color: 'red'}}>data</div>}
      <h1>Hello world</h1>
      <button onClick={onClick}>click me</button>
      <input type="text" placeholder='input value...' />
    </div>
  );
}

export default App;
