import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropType from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'
export default class News extends Component {

   static PropType = {
      country: PropType.string,
      pagesize: PropType.number,
      category: PropType.string
   }
   static defultProps = {
      country: 'in',
      pagesize: 8,
      category: 'general'
   }
   constructor() {
      super();
      this.state = {
         articles: [],
         loading: false,
         page: 1,
         totalresults: 0
      }

   }
   update = async () => {

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
      let data = await fetch(url);
        
      let parsedData = await data.json();
      this.setState({
         articles: this.state.articles.concat(parsedData.articles),
         totalresults: parsedData.totalResults
      })
   
   }


   async componentDidMount() {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2ff6170de9941d0b153a47f0b2f13c2&pageSize=${this.props.pagesize}`
      // let data = await fetch(url);
      // let parsedData = await data.json();
      //  this.setState({ articles: parsedData.articles })
      this.update();


   }
   fetchMoreData = async () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      this.setState({
         page: this.state.page + 1
      })
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
      let data = await fetch(url);

      let parsedData = await data.json();

this.setState({
         articles: this.state.articles.concat(parsedData.articles),
         totalresults: parsedData.totalResults
      })
   }
   render() {

      return (
         <>
            <InfiniteScroll
               dataLength={this.state.articles.length}
               next={this.fetchMoreData}
               hasMore={this.state.articles.length <= this.state.totalresults}
               loader={<h4>Loading...</h4>}
            >
               <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

                  {this.state.articles.map((ele) => {
                     return (
                        <NewsItem key={ele.url} title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} published={ele.publishedAt} />
                     )
                  })}
               </div>
            </InfiniteScroll>


         </>
      )
   }
}
