import { useState } from 'react'
import BigCard from './components/BigCard'
import SmallCard from './components/SmallCard'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const bigCardsData = [
    { platform: 'facebook', username: '@nathanf', followers: '1987', change: 12 },
    { platform: 'twitter', username: '@nathanf', followers: '1044', change: 99 },
    { platform: 'instagram', username: '@realnathanf', followers: '11k', change: 1099 },
    { platform: 'youtube', username: 'Nathan F.', followers: '8239', change: -144 }
  ]

  const smallCardsData = [
    { platform: 'facebook', metric: 'Page Views', value: '87', percentage: 3 },
    { platform: 'facebook', metric: 'Likes', value: '52', percentage: -2 },
    { platform: 'instagram', metric: 'Likes', value: '5462', percentage: 2257 },
    { platform: 'instagram', metric: 'Profile Views', value: '52k', percentage: 1375 },
    { platform: 'twitter', metric: 'Retweets', value: '117', percentage: 303 },
    { platform: 'twitter', metric: 'Likes', value: '507', percentage: 553 },
    { platform: 'youtube', metric: 'Likes', value: '107', percentage: -19 },
    { platform: 'youtube', metric: 'Total Views', value: '1407', percentage: -12 }
  ]

  function toggleTheme() {
    if (isDarkMode) {
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  }

  let bgColor = 'min-h-screen transition-all duration-300'
  if (isDarkMode) {
    bgColor = bgColor + ' bg-[hsl(230,17%,14%)]'
  } else {
    bgColor = bgColor + ' bg-white'
  }

  let headerBg = 'h-64 rounded-b-xl transition-all duration-300'
  if (isDarkMode) {
    headerBg = headerBg + ' bg-[hsl(232,19%,15%)]'
  } else {
    headerBg = headerBg + ' bg-[hsl(225,100%,98%)]'
  }

  let titleText = 'text-2xl font-bold'
  if (isDarkMode) {
    titleText = titleText + ' text-white'
  } else {
    titleText = titleText + ' text-[hsl(230,17%,14%)]'
  }

  let subtitleText = ''
  if (isDarkMode) {
    subtitleText = 'text-[hsl(228,34%,66%)] font-medium'
  } else {
    subtitleText = 'text-[hsl(228,12%,44%)] font-medium'
  }

  let modeLabel = ''
  if (isDarkMode) {
    modeLabel = 'Dark Mode'
  } else {
    modeLabel = 'Light Mode'
  }

  let separatorLine = 'block sm:hidden w-full border-b my-4'

  if (isDarkMode) {
    separatorLine = separatorLine + ' border-[hsl(228,34%,66%)]'
  } else {
    separatorLine = separatorLine + ' border-[hsl(228,12%,44%)]'
  }

  return (
    <div className={bgColor}>
      <div className={headerBg}>
        <div className="container mx-auto px-4 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h1 className={titleText}>
                Social Media Dashboard
              </h1>
              <p className={subtitleText}>
                Total Followers: 23,004
              </p>
            </div>
            <div className={separatorLine}></div>
            <div className="flex w-full sm:w-auto justify-between items-center gap-4 mb-6 sm:mb-0">
              <span className={subtitleText}>
                {modeLabel}
              </span>
              <ThemeToggle
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 pb-8">
        <div className="mb-16 sm:mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <BigCard
            platform={bigCardsData[0].platform}
            username={bigCardsData[0].username}
            followers={bigCardsData[0].followers}
            change={bigCardsData[0].change}
            darkMode={isDarkMode}
          />

          <BigCard
            platform={bigCardsData[1].platform}
            username={bigCardsData[1].username}
            followers={bigCardsData[1].followers}
            change={bigCardsData[1].change}
            darkMode={isDarkMode}
          />

          <BigCard
            platform={bigCardsData[2].platform}
            username={bigCardsData[2].username}
            followers={bigCardsData[2].followers}
            change={bigCardsData[2].change}
            darkMode={isDarkMode}
          />

          <BigCard
            platform={bigCardsData[3].platform}
            username={bigCardsData[3].username}
            followers={bigCardsData[3].followers}
            change={bigCardsData[3].change}
            darkMode={isDarkMode}
          />
        </div>

        <h2 className={titleText + ' mb-6'}>
          Overview - Today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <SmallCard
            platform={smallCardsData[0].platform}
            metric={smallCardsData[0].metric}
            value={smallCardsData[0].value}
            percentage={smallCardsData[0].percentage}
            darkMode={isDarkMode}
          />

          <SmallCard
            platform={smallCardsData[1].platform}
            metric={smallCardsData[1].metric}
            value={smallCardsData[1].value}
            percentage={smallCardsData[1].percentage}
            darkMode={isDarkMode}
          />

          <SmallCard
            platform={smallCardsData[2].platform}
            metric={smallCardsData[2].metric}
            value={smallCardsData[2].value}
            percentage={smallCardsData[2].percentage}
            darkMode={isDarkMode}
          />

          <SmallCard
            platform={smallCardsData[3].platform}
            metric={smallCardsData[3].metric}
            value={smallCardsData[3].value}
            percentage={smallCardsData[3].percentage}
            darkMode={isDarkMode}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallCard
            platform={smallCardsData[4].platform}
            metric={smallCardsData[4].metric}
            value={smallCardsData[4].value}
            percentage={smallCardsData[4].percentage}
            darkMode={isDarkMode}
          />

          <SmallCard
            platform={smallCardsData[5].platform}
            metric={smallCardsData[5].metric}
            value={smallCardsData[5].value}
            percentage={smallCardsData[5].percentage}
            darkMode={isDarkMode}
          />

          <SmallCard
            platform={smallCardsData[6].platform}
            metric={smallCardsData[6].metric}
            value={smallCardsData[6].value}
            percentage={smallCardsData[6].percentage}
            darkMode={isDarkMode}
          />

          <SmallCard
            platform={smallCardsData[7].platform}
            metric={smallCardsData[7].metric}
            value={smallCardsData[7].value}
            percentage={smallCardsData[7].percentage}
            darkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  )
}

export default App