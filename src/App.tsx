import './App.css'
import InfiniteScroll from './components/infinite-scroll'

function App() {
  return (
    <main className="bg-black min-w-screen min-h-screen flex flex-col justify-start items-center text-white">
      <h1 className="text-3xl font-bold mt-8">
        Infinite Scroll
      </h1>

      <div className="mt-8 w-[500px]">
        <InfiniteScroll />
      </div>
    </main>
  )
}

export default App
