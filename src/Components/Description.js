import {useParams} from 'react-router-dom';

const Description =()=> {
    const {userId} = useParams();
    console.log(userId,"cc")
  return (
    <>
<h1>ffff</h1>

    </>
  );
};

export default Description;