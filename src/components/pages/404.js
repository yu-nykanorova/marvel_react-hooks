import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{"color": "#9f0013", "fontSize": "36px", "textAlign": "center", "margin": "20px auto"}}>This page does not exist</p>
            <div style={{"backgroundColor": "#e0e0e0","border": "2px solid #e0e0e8", "borderRadius": "10px", "width": "25%", "marginInline": "auto", "padding": "5px"}}><Link style={{"display": "block", "textAlign": "center", "fontSize": "20px"}} to="/">Back to main page</Link></div>
        </div>
    )
}

export default Page404;