import NavBar from "./NavBar";

export default function Layout({child}){
    return (
        <div>
            <NavBar/>
            <div>{child}</div>
        </div>
    )
}