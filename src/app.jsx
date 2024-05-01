import { Viewer } from '@photo-sphere-viewer/core';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const root = document.createElement('div');
root.classList.add('h-dvh', 'w-dvw');

document.body.appendChild(root);

createRoot(root).render(<App />);

function App() {
    const elementRef = useRef(null);

    useEffect(() => {
        const viewer = new Viewer({
            container: elementRef.current,
            panorama: '/panoramas/panorama-1.jpeg',
        });

        return () => {
            viewer.destroy();
        };
    }, []);

    return <div className='h-full w-full' ref={elementRef} />;
}
