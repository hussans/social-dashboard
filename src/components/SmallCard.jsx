function SmallCard({ platform, metric, value, percentage, darkMode }) {

    let isPositive = false;
    if(percentage > 0) {
        isPositive = true;
    }

    let cardClass = 'p-6 rounded-lg transition-all duration-300 cursor-pointer';

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

    let metricColor = 'text-sm font-bold';
    if(darkMode) {
        metricColor = metricColor + ' text-[hsl(228,34%,66%)]';
    } else {
        metricColor = metricColor + ' text-[hsl(228,12%,44%)]';
    }

    let valueColor = 'text-3xl font-bold';
    if(darkMode) {
        valueColor = valueColor + ' text-white';
    } else {
        valueColor = valueColor + ' text-[hsl(230,17%,14%)]';
    }

    let percentageColor = 'flex items-center space-x-1 text-sm font-bold';
    if(isPositive) {
        percentageColor = percentageColor + ' text-[hsl(163,72%,41%)]';
    } else {
        percentageColor = percentageColor + ' text-[hsl(356,69%,56%)]';
    }

    let iconPath = '';
    if(isPositive) {
        iconPath = '/icon-up.svg';
    } else {
        iconPath = '/icon-down.svg';
    }

    let percentValue = percentage;
    if(percentage < 0) {
        percentValue = 0 - percentage;
    }

    return (
        <div className={cardClass}>
            <div className="flex justify-between items-center">
                <span className={metricColor}>
                    {metric}
                </span>
                <img src={"/icon-" + platform + ".svg"} alt={platform + " icon"} />
            </div>

            <div className="flex justify-between items-end mt-6">
                <p className={valueColor}>
                    {value}
                </p>
                <div className={percentageColor}>
                    <img src={iconPath} alt="change indicator" />
                    <span> {percentValue}% </span>
                </div>
            </div>
        </div>
    )
}

export default SmallCard