import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "./leftSideNav/LeftSideNav";
import NewsCard from "../shared/navbar/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 ">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news = {aNews}></NewsCard>)
                    }
                    </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;