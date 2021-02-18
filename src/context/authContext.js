import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSection from '../hooks/useSection'
import fire from '../config/Fire';
import 'firebase/auth';



export const AuthUser = createContext();

const AuthProvider = (props) => {

    const history = useHistory();

    const [authentication, setAuthentication] = useState({
        email:'',
        password: ''
    });

    const [authenticated, setAuthenticated] = useState({});

    const authenticatedUser = async (authentication) => {
        if(authentication === null) return;
        
        const { email, password } = authentication;

        await fire.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            setAuthenticated(user);
        })
        
        return history.push('/')    
    }

    const singOutFire = () => {
        history.push('/');
        setAuthenticated({});
        return fire.auth().signOut();
    }

    return (
        <AuthUser.Provider
            value={{
                authentication,
                authenticated,
                setAuthentication,
                setAuthenticated,
                authenticatedUser,
                singOutFire
            }}
        >
            {props.children}
        </AuthUser.Provider>
    )
}

export default AuthProvider;