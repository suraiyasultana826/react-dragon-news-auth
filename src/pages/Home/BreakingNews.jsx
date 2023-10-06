import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="block justify-center content-center flex">
            <button className="btn btn-danger">breaking News</button>
            <Marquee pauseOnHover='true' speed={100}>
 <Link to='/'> I can be a React component, multiple React components, or just some text.</Link>
</Marquee>
        </div>
    );
    }
export default BreakingNews;