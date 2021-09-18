
export default function Offering() {
    return ( 
        <div className="w-full h-full -mt-10 bg-purple-500">
            <div className="h-full mx-1 rounded-b-lg bg-black h-40 pt-20 text-center">
                <span className="text-white text-2xl font-bold tracking-wide">BROWSE ALL MY OFFERINGS</span>
                <div className="flex justify between py-10 md:px-12 items-center">
                    <img src="assets/left.png" alt="" className="hidden md:flex w-1/5" />
                    <img src="assets/middle.png" alt="" className="mx-auto" />
                    <img src="assets/right.png" alt="" className="hidden md:flex w-1/5" />
                </div>
                <div className="flex justify-center font-white space-x-4 pb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-4 rounded-full h-12 w-12 bg-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-4 rounded-full h-12 w-12 bg-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
     );
}