
import Image from './image';
import Name from './Name';

  function DogCard(props) {
    const { name, img } = props;
    let title = 'this is a dog card'
    return (
      <>
        <h2 style={
          {
            color:'red'
          }
          }>
            {title}, {2+3}
        </h2>
        <Name>
          <h3>{name}</h3> {/* passing hole jsx as props  */} 
        </Name>
        {/* <Image src={props.src} alt="Dog 1" />  // it will use dog src from App and will pass to Image also , so 2 images will appare
        <Image src={props.src} alt="Dog 2" /> */}
        <Image src={img} alt="Dog 1" />
        
      </>
    );
  }
  
  export default DogCard;


  //jsx transpile the code sing bable to execte 