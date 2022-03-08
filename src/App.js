import React from 'react';

function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100);
  }, [])

  return (
    <div >
      {data && <div>data</div>}
      <h1>Hello world</h1>
      <button>click me</button>
      <input type="text" placeholder='input value...' />
    </div>
  );
}

export default App;
