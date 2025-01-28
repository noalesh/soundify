import { Outlet } from "react-router-dom"


export function HomePage() {
    return (
        <div>
        <section>
            <h1 className="dev-comments">TODO - UNDER CONSTRUCTION... <br></br>HomePage</h1>
        </section >

         <section>
            <Outlet />
        </section>
        </div>
    )
}

