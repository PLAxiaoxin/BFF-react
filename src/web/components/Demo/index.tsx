import React , {FC,useReducer,useEffect,useRef,useState,useContext, useImperativeHandle} from 'react';
// type AppPops = {message: string};
// const Demo = ({message}: AppPops) => <div>{message}</div>
const initalState = {count: 0}

type ACTIONTYPE = | {type: "increment"; payload: number}
                  | {type: "decrement"; payload: string};
function reducer (state: typeof initalState, action: ACTIONTYPE){
  switch(action.type){
    case "increment":
      return {count:state.count + action.payload};
    case "decrement":
      return {count: state.count - Number(action.payload)};
    default:
      throw new Error();
  }
}

function Counter(){
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      Count: {state.count}
      <button onClick={()=> dispatch({type: "decrement", payload: "5"})}>-</button>
      <button onClick={()=> dispatch({type: "increment", payload: 5})}>+</button>
    </>
  )
}
// useEffect()是通用的副效应钩子
// const Welcome:FC = () => {
//   const props = {name: '1'}
//  useEffect(()=>{
//    document.title = "加载完成！";
//  },[props.name])
//  return <h1>Hello, {props.name}React</h1>
// }


// function DelayedEffect(props: { timerMs: number }):void {
//   const { timerMs } = props;
//   useEffect(
//     () =>{
//       setTimeout(() => {
//         /* do stuff */
//       }, timerMs),
//     [timerMs]
//     }
//   );
//   return null;
// }


//  useState 状态钩子
// export default function Button() {
//   const [buttonText, setButtonText] = useState('click me , please');
//   function handleClick(){
//     return setButtonText('Thans, been clicked');
//   }
//   return <button onClick={handleClick}>{buttonText}</button>
// };


// useContext 共享状态钩子
// const AppContext = React.createContext({});
//  const Navbar = () => {
//   const { username } = useContext(AppContext);
//   return (
//     <div className="navbar">
//       <p>AwesomeSite</p>
//       <p>{username}</p>
//     </div>
//   )
//  }

//  const Message = ()=>{
//   const { username } = useContext(AppContext);
//   return (
//     <div className="message">
//       <h1>Message</h1>
//       <p>1 message for {username}</p>
//     </div>
//   )
//  }

// export default function Demo(){
//   return(
//     <AppContext.Provider value={{
//       username: 'superawesome'
//     }}>
//       <div>
//         <Navbar />
//         <Message />
//       </div>
//     </AppContext.Provider>
//   )
// }
// function doSomethingWith(){

// }

// function MyComponent(){
//   const ref1 = useRef<HTMLElement>(null!);
//   useEffect(()=>{
//     doSomethingWith(ref1.current);
//   })
//   return <div ref={ref1}>etc</div>
// }

// function TextInputWithFocusButton(){
//   const inputEl = useRef<HTMLInputElement>(null);
//   const onButtonClick = ()=>{
//     if(inputEl && inputEl.current){
//       inputEl.current.focus();
//     }
//   };
//   return (
//     <>
//       <input type="text" ref={inputEl}/>
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>

//   )
// }

// type ListProps<ItemType> = {
//   items: ItemType[];
//   innerRef?: React.Ref<{scrollToItem(item: ItemType):void}>;
// }


// function List<ItemType>(props: ListProps<ItemType>){
//   useImperativeHandle(
//     props.innerRef, () => ({
//       scrollToItem(){},
//     }));
// }

export default Counter
