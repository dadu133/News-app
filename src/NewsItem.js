import React,{Component} from "react";
export default class NewsItem extends Component{
    
    render()
    {
        let{title,description,imageUrl,newsUrl,author,published} = this.props;
           return(
            <div className="ni-container">
                <h2>{title}</h2>
                <img src={imageUrl} width="200px"></img>
                <p>{description}</p> 
                <hr></hr>
                <p> By {author} on {new Date(published).toGMTString}</p>
                <a href={newsUrl} target="_blank">Read More</a>
            </div>
           )
    }
}