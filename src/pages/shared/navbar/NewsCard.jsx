import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title,  image_url, details, _id} = news;
    return (
        <div className="card mb-16 bg-base-100 shadow-xl">
  <figure><img src={image_url}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{
        details.length > 200 ? <p>{details.slice(0,200)}<Link
        to ={`/news/${_id}`} className="text-blue-700 font-bold">Read More...</Link></p>
        :
        <p>{details}</p>


}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default NewsCard;