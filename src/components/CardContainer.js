import Card from './Card';

function CardContainer(props){
  function importAll() {
    const r = require.context('../images', false, /\.(png|jpe?g|svg)$/);
    const images = [];
     r.keys().forEach((item) => {
       images.push( {name: item.replace('./', ''), src: r(item)})});
    return images
   }

   // assign and shuffle
  const images = importAll().sort(() => Math.random() - 0.5);
  return (
    <div className='cardContainer'>
      {images.map(e => <Card src={e.src} title={e.name} key={e.name} clickEvent={()=>props.click(e.name)}/>)}
    </div>);
}
export default CardContainer;
