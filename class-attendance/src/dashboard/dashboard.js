import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const { state } = useLocation()
    console.log(state)
    return <h1>Hello { state.userActive.username }</h1>
}

export default Dashboard;
