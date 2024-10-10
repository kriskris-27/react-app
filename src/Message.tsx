function Message() {
    const name = 'KRIS';
    if (name) {
      return <h1>HELLO {name}</h1>;
    }
    return <h1>HELLO WORLD</h1>;
  }
  
  function Button() {
    return <button>Click Me!</button>;
  }
  
  function Button2() {
    return <button>Don't Click Me!</button>;
  }
  
  export default function App() {
    return (
      <div>
        <Button />
        <Button2 />
        <Button />
      </div>
    );
  }
  