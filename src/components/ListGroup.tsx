

function ListGroup() {
  let items =[
    'newYork',
    'india',
    'kerala',
    'goa',
    'dubai'
  ];
items=[];

 const getmessage=()=>{
  return items.length===0? <p>No items found</p>:null
 }
  return (
    
    <>
      <h1>List</h1>
      {getmessage()}
      <ul className="list-group">
      {items.map((item)=>
        (<li key={item}>{item}</li>))}
      </ul>
    </>
    
  );
}
 
export default ListGroup;
