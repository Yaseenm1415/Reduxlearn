import { useSelector } from "react-redux";


export default function Userinfo() {
    let data = useSelector((state) => state.user) 
    return (
        <div className="container">
            <h1>{data.username}</h1>
            <p className="balance">Balance : <span className="dataBalance">{data.balance}</span></p>
        </div>
    )
}