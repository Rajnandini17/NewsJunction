import React, {Component} from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string   
    }

    constructor(){
        super();
       this.state = {
        articles: [],
        loading: false,
        page: 1
       }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd399b770d5c40f6ac8acad574033383&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data =  await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd399b770d5c40f6ac8acad574033383&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data =  await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })     
    }

    handleNextClick = async () => {

        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd399b770d5c40f6ac8acad574033383&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data =  await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }
}

    render() {
        return (
            <div className='container my-3'>
            <h1 className="text-center" style={{marginTop: '35px', marginBottom:'35px'}}><strong>Top Headlines</strong></h1>
            {this.state.loading && <Spinner/>}
            <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
            })}   
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page <= 1} type='button' className='btn' style={{backgroundColor:'#1D2B53', color: '#FAEF5D'}} onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn' style={{backgroundColor:'#1D2B53', color: '#FAEF5D'}} onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
        )
    }
}

export default News
