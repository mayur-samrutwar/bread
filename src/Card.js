function Card() {
    return (
            <div className="sticky -mt-72 w-full md:w-3/5 ml-50 z-10">
                <div className="bg-purple-600 border border-white rounded">
                    <div className="m-3 rounded bg-white p-4 md:p-10">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <img alt="" src="assets/dp.png" className="border-2 border-purple-600 p-1 rounded" />
                                <div className="flex flex-col space-y-2">
                                    <div className="space-x-2">
                                        <button className="bg-white text-sm border border-purple-600 px-2 py-1 md:px-4 md:py-2 rounded-3xl hover:bg-purple-600 hover:text-white">Yoga</button>
                                        <button className="bg-white text-sm border border-purple-600 px-2 py-1 md:px-4 md:py-2 rounded-3xl hover:bg-purple-600 hover:text-white">Wellness</button>
                                    </div>
                                <button className="bg-white text-sm w-1/2 border border-purple-600  px-2 py-1 md:px-4 md:py-2 rounded-3xl hover:bg-purple-600 hover:text-white">Fitness</button>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-8">
                                <button className="bg-purple-600 border border-purple-600 text-white px-2 py-1 md:px-6 md:py-2 rounded-lg hover:bg-white hover:text-purple-600">Book Trial</button>
                                <button className="bg-white border border-purple-600 px-2 py-1 md:px-6 md:py-2 rounded-lg hover:bg-purple-600 hover:text-white">Contact me</button>
                            </div>
                        </div>
                        <p className="text-3xl font-black mt-8">
                            Jane Doe
                        </p>
                        <p className="text-gray-500 my-2">
                            Lorem ipsum dolor sit amet, consectetur adip ex ea commodo. Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet, consectetur adip ex ea commodo. Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet, consectetur adip ex ea commodo. Lorem ipsum dolor sit amet
                        </p>
                        <div className="flex">
                            <img src="/assets/linkedin.png" alt="" />
                            <img src="/assets/linkedin.png" className="ml-4" alt="" />
                            <img src="/assets/linkedin.png" className="ml-4" alt="" />
                            <img src="/assets/linkedin.png" className="ml-4" alt="" />
                        </div>
                        <hr className="my-4" />
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-bold">Lives in</span>
                                <span className="space-x-2 ml-2 text-sm">
                                    <button className="px-6 rounded-3xl py-1 bg-gray-100 text-black">Delhi</button>
                                </span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                </svg>
                                <span className="font-bold">Speaks</span>
                                <span className="space-x-3 ml-2 text-sm">
                                    <button className="px-6 rounded-3xl py-1 bg-gray-100 text-black">English</button>
                                    <button className="px-6 rounded-3xl py-1 bg-gray-100 text-black">Hindi</button>
                                    <button className="px-6 rounded-3xl py-1 bg-gray-100 text-black">Punjabi</button>
                                </span>
                            </div>
                        </div>
                        <div className="my-12 flex flex-col md:flex-row">
                            <div className="flex flex-col">
                                <p className="text-xl font-black tracking-wider">Check out my yoga video about 30 min yoga for begineers</p>
                            <p className="flex items-center font-bold text-purple-600 text-xl mt-8">Contact me
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </p>
                            </div>
                            <img alt="" src="assets/slide3.png" className="w-full md:w-7/12 border-2 border-purple-600 p-1 rounded" />
                        </div>
                        <div className="border border-purple-600 rounded-xl py-6 px-4">
                            <span className="font-semibold">Subscibe to my profile and never miss an update from me.</span>
                            <div className="flex mt-4">
                                <input type="text" className="border-2 rounded-md px-3 py-1 w-full" placeholder="Enter your email"/>
                                <button className="ml-4 bg-purple-600 border border-purple-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-purple-600">Subscibe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Card;