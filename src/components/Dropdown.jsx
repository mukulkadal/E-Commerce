import { useDispatch, useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa6";
import {toggleDropdown} from '../../redex/dropSlice'

const Dropdown = () => {
  const isOpen = useSelector((state) => state.dropdown.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className=" flex items-center justify-center gap-2" onClick={() => dispatch(toggleDropdown())}  >Options <FaAngleDown />  </div>
        <ul className={`${isOpen ? "block" : "hidden"} w-[200px] bg-white border p-4 absolute`}>
          <li>Jeans</li>
          <li>Lowers</li>
          <li>Joggers </li>
          <li>Formal Pants</li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
