
export default function FAQ({ title, active, setActive,text }) {
    const show = () => {
        setActive(title)
        if(active === title){
            setActive("")
        }
    }
    return (
        <div className='m-3 md:mx-10'>
            <div className={active !== title ? 'flex cursor-pointer items-center justify-between bg-fuchsia-900 text-white rounded-md p-2 sm:px-10 text-xl '
                : 'rounded-b-3xl flex items-center sm:px-10 justify-between bg-fuchsia-900 text-white  p-2 text-xl  cursor-pointer'}
                onClick={show}>
                <p >{title}</p>
                <div className='text-3xl'>
                    {active !== title && <span>+</span>}
                    {active === title && <span className="text-3xl">-</span>}
                </div>
            </div>
            {active === title ? <div className='bg-yellow-700 p-5  text-white rounded-t-3xl flex flex-col'>
                <p>{text} </p>
            </div> : ""}
        </div>
    )
}
