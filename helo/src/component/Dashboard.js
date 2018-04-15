import React, { Component } from 'react';
import axios from 'axios';


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
        posts: [],
        username:''

   }
}
componentDidMount() {
axios.get('/api/posts').then(response => {
    console.log("user name is ",response.data);
    this.setState(
        {posts: response.data.posts, username: response.data.user })
  
    console.log("data is ", response.data);
})
}
render() {
  let postList = this.state.posts.map((post,i) => (
      <div key={i}>
      <p>Title: {post.title}</p>
      <p>Author: {post.author}</p>
      <p>content: {post.content}</p>
      <p>Image: {post.img}</p>

      </div>
  ))
  return(
      <div>
          <h1> List of posts is {this.state.username} </h1>
          {postList}
      </div>

  )
}
}

export default Dashboard;
