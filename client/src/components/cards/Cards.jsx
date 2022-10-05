import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import Box from '@mui/material/Box';
import './Cards.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCard, getAllPhoto} from '../../RTKSlice/rtkslice'

const Cards = () => {
  // const [ card, setCard ]= useState([]);
  // const [ photo, setPhoto ] = useState([]);

  // const [ load, setLoad ] = useSelector([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);

  const card = useSelector(store => store.toolkit.card)


  console.log('card toolkit on Card',card);
  // console.log('card toolkit on Card',photo);
  
  const dispatch = useDispatch()


  useEffect(() => {
    if(fetching){

      axios.post('http://localhost:3001/allFlat', {currentPage}, {withCredentials: true})
      .then((res)=>{
        // setLoad([...load])
        console.log('res.data',res.data);
        dispatch(getAllCard([...card,...res.data.flat.rows]));
        setCurrentPage((prevState) => prevState + 10);
        console.log('currentPage', currentPage);
       
        // setCard(res.data.flat)
        // setPhoto(res.data.photoflat)
        // console.log('res.data', res.data);
      })
      .finally(()=> setFetching(false))
    }

  },[fetching])

  useEffect(() => {
          document.addEventListener('scroll', scrollHandler);
          return function () {
             document.removeEventListener('scroll', scrollHandler);
          };
       }, []);
    
       const scrollHandler = (e) => {
          if (
             e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
             100
          ) {
             setFetching(true);
          }
       };



  return (
    <Box
    className="wrapper"
    marginTop="20px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
      {
        card.map((el) =>  <SingleCard key={el.id} el={el}  />)
      }
   
    </Box>
  );
};

export default Cards;



// import React, { useState, useEffect } from 'react';
// import SingleCard from '../../components/singleCard/SingleCard';
// import Box from '@mui/material/Box';
// import './Cards.css';
// import axios from 'axios';

// const Cards = () => {
//    const [card, setCard] = useState([]);
//    const [photo, setPhoto] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [fetching, setFetching] = useState(true);

//    useEffect(() => {
//       if (fetching) {
//          axios
//             .get('http://localhost:3001/allFlat', { withCredentials: true })
//             .then((res) => {
//                setCard([...card, ...res.data.flat]);
//                setPhoto([...photo, ...res.data.photoflat]);
//                setCurrentPage((prevState) => prevState + 1);
//                //  console.log('res.data', res.data);
//             });
//       }
//    }, [fetching]);

//    useEffect(() => {
//       document.addEventListener('scroll', scrollHandler);
//       return function () {
//          document.removeEventListener('scroll', scrollHandler);
//       };
//    }, []);

//    const scrollHandler = (e) => {
//       if (
//          e.target.documentElement.scrollHeight -
//             (e.target.documentElement.scrollTop + window.innerHeight) <
//          100
//       ) {
//          setFetching(true);
//       }
//    };

//    return (
//       <Box
//          className="wrapper"
//          marginTop="20px"
//          display="flex"
//          justifyContent="center"
//          alignItems="center"
//       >
//          {card.map((el) => (
//             <SingleCard
//                key={el.id}
//                el={el}
//                photo={photo}
//             />
//          ))}
//       </Box>
//    );
// };

// export default Cards;