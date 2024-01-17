import './App.css';
import MainChat from "./components/MainChat.jsx"

function App() {
  return (
	  <div className="flex flex-col bg-black h-screen w-screen">
		<div className='font-extrabold text-white text-3xl text-center align-middle'>
	  		Stream Chat
	  	</div>
	  	<div className='flex flex-col-reverse overflow-hidden'>
			<MainChat />	
	  	</div>
	  </div>
  );
}

export default App;
