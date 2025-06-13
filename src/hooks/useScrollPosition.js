import {useState, useEffect} from 'react';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        const handleScroll = () => {
            requestAnimationFrame(updatePosition);
        };

        window.addEventListener('scroll', handleScroll);
        updatePosition();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPosition;
};