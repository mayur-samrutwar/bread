export default function Footer() {
    return (
    <div className="w-full bg-purple-500 pt-8 pb-4 text-white text-sm md:text-lg">
        <div className="flex flex-col md:flex-row md:justify-between px-4">
            <div className="flex flex-col items-center md:justify-start">
                <div> Powered by bread</div>
                <div className="flex mt-2">
                    <img src="/assets/insta.png" alt="" />
                    <img src="/assets/facebook.png" className="ml-4" alt="" />
                    <img src="/assets/twitter.png" className="ml-4" alt="" />
                    <img src="/assets/linkedin.png" className="ml-4" alt="" />
                </div>
            </div>
            <div className="flex justify-between md:flex-col md:mr-4 mt-4 md:mt-0">
                <div>
                    &copy; Bread 2021 All rights reserved
                </div>
                <div className="flex justify-between mt-2">
                    <a href="http://" className="ml-2">Terms</a>
                    <a href="http://" className="ml-2">Privacy</a>
                    <a href="http://" className="ml-2">About</a>
                </div>
            </div>
        </div>
    </div>
    );
}