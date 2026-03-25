function UserProfile({username,age,isAdmin = false}){
    return (
        <div className="user-card">
            <strong>{username}</strong> {age} Admin: {isAdmin ? "Yes" : "No"}
        </div>
    );
}

export default UserProfile;