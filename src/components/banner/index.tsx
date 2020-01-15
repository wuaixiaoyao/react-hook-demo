import React from "react";
import { useSwipeable } from "react-swipeable";
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  SlideButton,
  PREV,
  NEXT
} from "./components";

interface OrderProps {
  index: number, 
  pos: number, 
  numItems: number
}

const getOrder = ({ index, pos, numItems }: OrderProps) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const initialState = { 
  pos: 0, 
  sliding: false,
  dir: NEXT
};

interface InitialStateProps{
  pos: number, 
  sliding: boolean,
  dir: string
}

interface CarouselProps{
  title: string,
  children: React.ReactNode
}

const Carousel = (props: CarouselProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { dir, sliding } = state;
  const numItems = React.Children.count(props.children)

  const slide = (dir: string) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  
  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={dir} sliding={sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <SlideButton onClick={() => slide(PREV)} float="left">
        Prev
      </SlideButton>
      <SlideButton onClick={() => slide(NEXT)} float="right">
        Next
      </SlideButton>
    </div>
  );
};

interface ReducerProps{
  type: string, 
  numItems?: any
}

function reducer(state: InitialStateProps, { type, numItems }: ReducerProps) {
  switch (type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
