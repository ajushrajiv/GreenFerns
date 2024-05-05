import React, { useContext } from 'react';
import UserContext from '../../../contexts/user-context/UserContext';

function Profile(){

    const { user , logOutUser} = useContext(UserContext);
    const handleLogout = () => {
        logOutUser();
      };
    return(
        <div>
            {console.log("USER FROM PROFILE",user)}
            {user ?
             (
                <div>
                    {console.log("Welcome", { user })}
                    <p>Welcome, {user.username}</p>
                <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (  <p>Please log in.</p>  )}
        </div>
    )
}

export default Profile;