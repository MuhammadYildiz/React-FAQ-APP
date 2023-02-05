import { useState } from 'react'
import FAQ from './FAQ'
function App() {
	const [active, setActive] = useState("")
	return (
		<div className='w-[90%] m-auto bg-cyan-500 p-5 sm:w-[50%] mt-20 rounded-xl shadow-2xl ' >
			<h1 className='text-center text-yellow-50 text-3xl py-5'>FAQ APP</h1>
			<FAQ title="Question  1" active={active} setActive={setActive}
				text="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias?" />
			<FAQ title="Question  2" active={active} setActive={setActive}
				text="2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias?" />
			<FAQ title="Question  3" active={active} setActive={setActive}
				text="3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias?" />
			<FAQ title="Question  4" active={active} setActive={setActive}
				text="4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias?" />
			<FAQ title="Question  5" active={active} setActive={setActive}
				text="5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias?" />
		</div>
	)
}

export default App
