import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errMessage, setErrMsg] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrMsg(err.message)
        );
    }, []);

    return [lat, errMessage];
};