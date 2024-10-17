
function Footer() {
    return (
        <footer className="bg-[#7c8584] bg-opacity-40 flex flex-col items-center justify-center p-11 mt-20">

            <div className="flex justify-between w-52">
            <a href="https://github.com/ChanGuaZzz" target="_blank" className="text-white opacity-40 hover:opacity-80 transition-all hover:scale-110"><ion-icon name="logo-github" size="large"></ion-icon></a>
            <a href="https://www.linkedin.com/in/geyson-steven-gualdron-arjona-b22b99273" target="_blank" className="text-white opacity-40 hover:opacity-80 transition-all hover:scale-110 hover:text-[#0a66c2]"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
            <a href="https://www.instagram.com/gxxsonhub" target="_blank" className="text-white opacity-40 hover:opacity-80 hover:text-[#ff41ff] transition-all hover:scale-110"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
            </div>

            <p className="text-white opacity-25 mt-4">© Geysongualdron</p>
        </footer>
    )
}

export default Footer