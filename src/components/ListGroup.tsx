

function ListGroup() {
  const items =[
    'newYork',
    'india',
    'kerala',
    'goa',
    'dubai'
  ];
  return (
    
    <>
      <h1>List</h1>
      <ul className="list-group">
      {items.map((item)=>
        (<li>{item}</li>))}
      </ul>
    </>
    
  );
}

export default ListGroup;
