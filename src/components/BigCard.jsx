function BigCard({ platform, username, followers, change, darkMode }) {

    let borderColor = '';

    if(platform === 'facebook') {
        borderColor = 'border-[hsl(208,92%,53%)]';
    } else if(platform === 'twitter') {
        borderColor = 'border-[hsl(203,89%,53%)]';
    } else if(platform === 'youtube') {
        borderColor = 'border-[hsl(348,97%,39%)]';
    }

    let isPositive = false;
    if(change > 0) {
        isPositive = true;
    }

    let cardClass = 'rounded-lg pt-1 pb-6 relative transition-all duration-300 cursor-pointer';

    if(darkMode) {
        cardClass = cardClass + ' bg-[hsl(228,28%,20%)]';
    } else {
        cardClass = cardClass + ' bg-[hsl(227,47%,96%)]';
    }

    if(darkMode) {
        cardClass = cardClass + ' hover:bg-[hsl(228,26%,27%)]';
    } else {
        cardClass = cardClass + ' hover:bg-[hsl(227,47%,93%)]';
    }

    if(platform !== 'instagram') {
        cardClass = cardClass + ' border-t-4 ' + borderColor;
    }

    let usernameColor = 'text-sm font-bold';
    if(darkMode) {
        usernameColor = usernameColor + ' text-[hsl(228,34%,66%)]';
    } else {
        usernameColor = usernameColor + ' text-[hsl(228,12%,44%)]';
    }

    let valueColor = 'text-5xl font-bold';
    if(darkMode) {
        valueColor = valueColor + ' text-white';
    } else {
        valueColor = valueColor + ' text-[hsl(230,17%,14%)]';
    }

    let labelColor = 'text-xs uppercase tracking-[0.3em] mt-2';
    if(darkMode) {
        labelColor = labelColor + ' text-[hsl(228,34%,66%)]';
    } else {
        labelColor = labelColor + ' text-[hsl(228,12%,44%)]';
    }

    let changeColor = 'flex items-center space-x-1 text-sm font-bold';
    if(isPositive) {
        changeColor = changeColor + ' text-[hsl(163,72%,41%)]';
    } else {
        changeColor = changeColor + ' text-[hsl(356,69%,56%)]';
    }

    let iconPath = '';
    if(isPositive) {
        iconPath = '/icon-up.svg';
    } else {
        iconPath = '/icon-down.svg';
    }

    let typeLabel = 'Followers';
    if(platform === 'youtube') {
        typeLabel = 'Subscribers';
    }

    let changeValue = change;
    if(change < 0) {
        changeValue = 0 - change;
    }

    let instagramBorder = null;
    if(platform === 'instagram') {
        instagramBorder = <div className="absolute top-0 left-0 w-full h-[4px] rounded-t-lg bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]"></div>;
    }

    return (
        <div className={cardClass}>
            {instagramBorder}

            <div className="flex flex-col items-center space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                    <img src={"/icon-" + platform + ".svg"} alt={platform + " icon"} />
                    <span className={usernameColor}>
                        {username}
                    </span>
                </div>

                <div className="text-center">
                    <p className={valueColor}>
                        {followers}
                    </p>
                    <p className={labelColor}>
                        {typeLabel}
                    </p>
                </div>

                <div className={changeColor}>
                    <img src={iconPath} alt="change indicator" />
                    <span> {changeValue} Today </span>
                </div>
            </div>
        </div>
    )
}

export default BigCard