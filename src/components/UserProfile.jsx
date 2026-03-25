function UserProfile({username,age,isAdmin = false}){
    return (
        <div>
            <strong>{username}</strong> {age} Admin: {isAdmin ? "Yes" : "No"}
        </div>
    );
}

export default UserProfile;