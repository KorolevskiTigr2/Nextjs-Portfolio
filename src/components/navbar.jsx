import Link from "next/link"


const Navbar = () => {
   return (
     <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="">
            <Link href="/" className="text-sm rounded-md bg-black px-1 font-semibold flex items-center justify-center">
            <span className="text-white mr-1">Aliaksandr</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
            </Link>
        </div>
        <div className="">2</div>
     </div>
   )
 }
 
 export default Navbar
 