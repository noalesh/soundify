import { Outlet } from "react-router-dom"


export function HomePage() {
    return (
        <div>
        <section>
            <h1>Soundify</h1>
        </section >

         <section>
            <Outlet />
        </section>
        </div>
    )
}

