import React,{useEffect,useState} from 'react';
import classes from './MealsMenu.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import {FaStore} from 'react-icons/fa6'
import { AiOutlineArrowLeft } from "react-icons/ai";
import {DragDropContext,Draggable,Droppable} from 'react-beautiful-dnd'


const MealsMenu = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const [imageposition,setImagePosition]= useState()
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate()

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newPosition = { x: result.destination.x, y: result.destination.y };
    setLogoPosition(newPosition);
  };
  
  const restaurantData = params.get('image');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Restaurant Image',
          text: 'Check out this restaurant image!',
          url: restaurantData,
        });
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    }
  };

  const title = params.get('title');
  const image = params.get('image');
  const restaurantlocation = params.get('location');
  const rating = params.get('rating');


  const imageStyle = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  const handleBackToRegister = () => {
    navigate("/"); 
  };



  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <div>
       <header className={classes["back-arrow"]} onClick={handleBackToRegister}>
        <AiOutlineArrowLeft />
      </header>
      <div className={classes.image} style={imageStyle} onClick={handleShare}>
  <Droppable droppableId="fastor-logo">
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <Draggable draggableId="fastor-logo" index={0}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <FaStore
                className={classes['fastor-logo']}
                style={{
                  transform: `translate(${logoPosition.x}px, ${logoPosition.y}px)`,
                }}
              />
            </div>
          )}
        </Draggable>
      </div>
    )}
  </Droppable>
</div>
      <div className={classes.textbox}>
        <div className={classes.text}>
          <h1>{title}</h1>
          <p>{restaurantlocation}</p>
          <p style={{color:'orange'}}>4 Offers Trending</p>
        </div>
        <p style={{fontSize:'30px', display:'flex',justifyContent:'center',paddingRight:'40px'}}><CiStar/>{rating}</p>
      </div>
      <p className={classes.description}>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</p>
    </div>
    </DragDropContext>
  );
};

export default MealsMenu;
