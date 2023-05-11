import {
  AiOutlineArrowUp,
  AiOutlineCaretUp,
} from "react-icons/ai";

const up = <AiOutlineCaretUp />; 

const BtnBack = () => {
  return (
    <div className='btnUpTopo'>
      <a href='#home'>{up}</a>
    </div>
  );
};

export default BtnBack;
