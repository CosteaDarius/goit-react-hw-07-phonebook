import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/contactsSlice";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
      </label>
    </div>
  );
};

export default Filter;
