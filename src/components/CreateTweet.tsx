import * as React from 'react';
import { createTweet } from '../lib/api';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


interface Tweet {
    content: string,
    loading: boolean
    username: string
}

class CreateTweet extends React.Component<{}, Tweet> {
    constructor(props:any) {
        super(props);
        this.state = {
            content: '',
            loading: false,
            username: ''
        }
        this.onTweetChange = this.onTweetChange.bind(this);
        this.onSendTweet = this.onSendTweet.bind(this);
    }
    onTweetChange(e: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ content: (e.target as HTMLInputElement).value });
    }

    onSendTweet() {
        this.setState({ 'loading': true })
        const date = new Date().toISOString();
        const userName = localStorage.getItem('username');
        const content = this.state.content;
        createTweet({ tweet: { content: content, userName: userName, date: date } }).then((response) => {
            this.setState({ 'loading': false });
        }).catch((error) => {
            this.setState({ 'loading': false });
            alert("Error. Please try again later.")
        })
    }

    render() {
        let loading = this.state.loading;
        const sendEnabled = this.state.content && this.state.content.length < 141;
        return (
            <div className="createTweet">
                {!loading && <textarea className="writeTweet" onChange={this.onTweetChange} placeholder="What you have in mind..." ></textarea>}
                {(!loading && this.state.content.length > 141) && <h3>Tweet has too many characters.</h3> }
                {loading && <Loader type="Oval" height={100} width={100} color="gray" />}
                <button disabled={!sendEnabled} onClick={this.onSendTweet}>Tweet</button>
            </div>
        )}
        
    }

export default CreateTweet;