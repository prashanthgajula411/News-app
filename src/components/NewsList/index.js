// // import {Component} from 'react'

// import NewsItem from '../NewsItem'


// class NewsList extends Component{


// state={newsData:[]}

//     componentDidMount(){
//         this.getNews()
//     }

//     getNews= async ()=>{
//         const url="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3e23d5f332e24976b9ec4de0a63b22cd"
//         const response= await fetch(url)
//         const data= await response.json()
//         if (response.status==="ok"){
           
//             const formattedData= data.articles.map((eachItem)=>({
//                 id:eachItem.source.id,
//                 imgUrl: eachItem.urlToImage,
//                 headline: eachItem.title,
//                 content: eachItem.description,
//                 link: eachItem.url
//             }))
//             this.setState({newsData:formattedData})
//         }
//         else{
//             console.log("error")
//         }
//     }


//     render(){

//         const {newsData}=this.state
//         return(
//             <div>
//             <ul>
//                 {newsData.map((each)=>(
//                     <NewsItem newsDetails={each} key={each.id}/>
//                 ))}

                
//             </ul>
//             <h1>Hi</h1>
//             </div>
//         )
//     }
// }

// export default NewsList

import { Component } from 'react';
import NewsItem from '../NewsItem';

class NewsList extends Component {
    state = { newsData: [] };

    componentDidMount() {
        this.getNews();
    }

    getNews = async () => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3e23d5f332e24976b9ec4de0a63b22cd";
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            const formattedData = data.articles.map((eachItem, index) => ({
                id: eachItem.source.id || index, // Fallback to index if id is null
                imgUrl: eachItem.urlToImage,
                headline: eachItem.title,
                content: eachItem.description,
                link: eachItem.url
            }));
            this.setState({ newsData: formattedData });
        } else {
            console.log("Error fetching news");
        }
    };

    render() {
        const { newsData } = this.state;
        return (
            <div>
                <ul className="news">
                    {newsData.map((each) => (
                        <NewsItem newsDetails={each} key={each.id} />
                    ))}
                </ul>
                <h1>Hi</h1>
            </div>
        );
    }
}

export default NewsList;
