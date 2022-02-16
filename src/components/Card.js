
function Card(props){
  return ( <img src={props.src} alt={props.title} onClick={props.clickEvent} /> );
}
export default Card;
