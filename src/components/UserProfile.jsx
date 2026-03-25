function UserProfile({username,age,isAdmin = false}){
    return (
        <div className="user-card">
            <strong>{username}</strong> Age: {age} Admin: {isAdmin ? "Yes" : "No"}
        </div>
    );
}

export default UserProfile;