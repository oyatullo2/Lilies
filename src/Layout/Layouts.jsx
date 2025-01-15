import { Home } from "../Pages/Home/home"
import { Sidebar } from "./Sidebar/Sidebar"
export const Layouts = () => {
    return(
        <>
        <div className="flex w-full overflow-x-hidden h-screen max-h-full">
            <div className="w-full max-w-[320px] bg-[#FBFBFB]">
                <Sidebar/>
            </div>
            <div className="w-full bg-white">
                <Home/>
            </div>
        </div>
        </>
    )
}