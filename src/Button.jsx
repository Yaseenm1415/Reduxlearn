import { useDispatch } from "react-redux";
import { addMoney } from "./store";
import { removeMoney } from "./store";

export default function Button() {
    const dispatch = useDispatch();
    return (
        <div className="btns">
            <button className="add" onClick={() => dispatch(addMoney(500))}>Add 500</button>    
            <button className="remove" onClick={() => dispatch(removeMoney(500))}>Remove 500</button>
        </div>
    );
}