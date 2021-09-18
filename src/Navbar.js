import React, { useState } from 'react';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div class="w-full px-4 py-5 md:px-24 lg:px-8 bg-purple-600 z-20">
            <div class="relative flex items-center justify-between">
                <a
                    href="/"
                    className="text-xl text-white underline inline-flex items-center"
                >
                    bre.ad/jane
                </a>
                <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a
                            href="/"
                            class="font-medium tracking-wide text-white hover:text-purple-100"
                        >
                            Offerings
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            class="font-medium tracking-wide text-white hover:text-purple-100"
                        >
                            Other Links
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            class="font-medium tracking-wide text-white hover:text-purple-100"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            class="font-medium tracking-wide text-white hover:text-purple-100"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            class="font-medium tracking-wide text-white hover:text-purple-100"
                        >
                            Contact me
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            class="inline-flex items-center justify-center px-4 py-1 font-medium tracking-wide text-white bg-purple-600 hover:bg-white hover:text-purple-600 rounded-3xl border border-white"
                        >
                            Book Trial
                        </a>
                    </li>
                </ul>
                <div class="lg:hidden">
                    <button
                        class="p-2 -mr-1 transition duration-200 rounded focus:outline-none text-white focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div class="absolute top-0 left-0 w-full">
                            <div class="p-5 bg-white border rounded shadow-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            className="text-xl text-purple-600 underline inline-flex items-center"
                                        >
                                            bre.ad/jane
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                class="font-medium tracking-wide text-purple-600 hover:text-purple-500"
                                            >
                                                Offerings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                class="font-medium tracking-wide text-purple-600 hover:text-purple-500"
                                            >
                                                Other Links
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                class="font-medium tracking-wide text-purple-600 hover:text-purple-500"
                                            >
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                class="font-medium tracking-wide text-purple-600 hover:text-purple-500"
                                            >
                                                Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                class="font-medium tracking-wide text-purple-600 hover:text-purple-500"
                                            >
                                                Contact me
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                class="inline-flex items-center justify-center px-4 py-1 font-medium tracking-wide text-white bg-purple-600 hover:bg-white hover:text-purple-600 rounded-3xl hover:border hover:border-purple-600"
                                            >
                                                Book Trial
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};