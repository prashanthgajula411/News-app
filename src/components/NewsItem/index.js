

// import './index.css'



// const NewsItem=(props)=>{
//     const {newsDetails}=props
//    const {imgUrl,headline,content,link}= newsDetails
//         return(
//             <li>
//                 <img src={imgUrl} alt="img"/>
//                 <h1>{headline}</h1>
//                 <p>{content}</p>
//                 <div>
//                     <button><a herf={link}>Read more</a></button>
//                 </div>
//             </li>
//         )
// }
//  export default NewsItem
import './index.css';

const NewsItem = (props) => {
    const { newsDetails } = props;
    const { imgUrl, headline, content, link } = newsDetails;
    return (
        <li className="list-con">
            <img className="img" src={imgUrl} alt="news" />
            <h1 className="heading">{headline}</h1>
            <p>{content}</p>
            <div>
                <button>
                    <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
                </button>
            </div>
        </li>
    );
};

export default NewsItem;



