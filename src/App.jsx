import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {



  return (
    <>
      <div className="bg-[hsl(230,17%,14%)] w-full h-screen relative">
        <div className="bg-[hsl(232,19%,15%)] w-full h-[25%] rounded-b-[25px] absolute">
          <div className="py-[30px] px-[150px]">
            <div className="font-[inter] font-[700] flex justify-between items-center">
              <div>
                <p className="text-[hsl(0,0%,100%)] text-[1.5rem]"> Social Media Dashboard </p>
                <p className="text-[hsl(228,34%,66%)] text-[0.8rem]"> Total Followers: 23,004 </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[hsl(0,0%,100%)] text-[0.8rem]"> Dark Mode </p>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
