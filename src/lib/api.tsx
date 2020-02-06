import axios from 'axios';

export function createTweet(tweet:object) {
    return axios.post(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/`, tweet);
}

export function getTweets () {
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/`);
}