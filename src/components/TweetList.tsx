import * as React from 'react';
import { getTweets } from '../lib/api';


interface State {
    tweets: Array<Tweet>
}

type Tweet = {
    userName: string,
    content: string,
    date: string
}


export class TweetList extends React.Component<{}, State> {
    constructor (props: {}) {
        super(props)
        this.state = {
            tweets: []
        }
    }
    
    componentDidMount() {
        setInterval(this.loadTweets, 1000);
    }
     
    loadTweets = () => {
        getTweets().then(response => {
          this.setState({ tweets: response.data.tweets.sort()})
        })
      }
    render() {
        return (  
            this.state.tweets.map(Tweet => {
                return (<div className="tweet" key={Tweet.date}>
                    <h6>{Tweet.userName}</h6>
                    <h6 className="date">{Tweet.date}</h6>
                    <p>{Tweet.content}</p>
                </div>);
            })
        )
    }
}