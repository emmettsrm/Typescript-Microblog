import { createContext } from 'react';

const MyContext = createContext({
    loading: false,
    tweets: [],
    onTweetCreated: () => {}
})

export default MyContext;