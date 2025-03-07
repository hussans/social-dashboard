function ThemeToggle({ isDarkMode, toggleTheme }) {

    let toggleClass = 'relative w-12 h-6 rounded-full cursor-pointer transition-all duration-300';

    if(isDarkMode) {
        toggleClass = toggleClass + ' bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]';
    } else {
        toggleClass = toggleClass + ' bg-[hsl(230,22%,74%)]';
    }

    let dotClass = 'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transform transition-transform duration-300';

    if(isDarkMode) {
        dotClass = dotClass + ' left-7';
    } else {
        dotClass = dotClass + ' left-1';
    }

    return (
        <button onClick={toggleTheme} className={toggleClass}>
            <div className={dotClass}></div>
        </button>
    )
}

export default ThemeToggle