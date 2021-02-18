import { useState, useEffect } from 'react';
import fire from '../config/Fire';

const useSection = () => {

    const [section, setSection] = useState(null);


    useEffect(() => {
        const unsucribe = fire.auth().onAuthStateChanged(user => {
            if(user) {
                setSection(user)
            }else {
                setSection(null);
            }
        });

        return ()=> unsucribe();
    },[]);

    return section;
}
 
export default useSection;