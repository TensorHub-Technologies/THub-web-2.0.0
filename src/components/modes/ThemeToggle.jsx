import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../../store/modeSlice';

function ThemeToggle() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.customization.isDarkMode);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div>
            <div className="dark:bg-blue-400 dark:text-white text-black bg-pink-400 h-96 text-xl">
                This text color and background will change based on the theme.
            </div>
            <button onClick={() => dispatch(toggleMode())} className='border-2 p-3 rounded-lg'>
                {isDarkMode?"darkmode":"lightmode"}
            </button>
        </div>
    )
}

export default ThemeToggle