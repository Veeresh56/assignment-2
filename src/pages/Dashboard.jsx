import UserProfile from "../components/UserProfile";

function Dashboard() {
  return (
    <div className="point-box">
        <h2>Dashboard</h2>

        <div className="dashboard-container">
        <UserProfile username="Veeresh" age={23} isAdmin = {true}/>
        <UserProfile username="Jonny" age={40} isAdmin = {false}/>
        <UserProfile username="Pawan" age={28} />   
        </div>
    </div>
  );
}

export default Dashboard;