import React, {Component} from 'react'

export class NewsItem extends Component {

    render() {

    let {title, description, imageUrl, newsUrl, author, date} = this.props;
  return (
    <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl}
         className="card-img-top" alt="..."/>
        {/* <div className="card-body" style={{backgroundColor:'#FAEED1'}}> */}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer noopener"className="btn btn-sm" style={{backgroundColor:'#1D2B53', color: '#FAEF5D'}}>Read More...</a>
        </div>
    </div>
    </div>
  )
}
}

export default NewsItem


