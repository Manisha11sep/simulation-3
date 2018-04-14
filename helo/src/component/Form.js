import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            img: '',
            title:'',
            message:''

         };
  
      this.createPost = this.createPost.bind( this );
    this.title = this.title.bind(this);
    this.imageUrl = this.imageUrl.bind(this);
    this.content = this.content.bind(this);
    }

    title(event){
        this.setState({title:event.target.value});
        console.log(this.state.title);
    }
    imageUrl(e){
        this.setState({img:e.target.value});
    
    }
    content(event){
        this.setState({content:event.target.value});
    }

    createPost()
    {
     
     const {title,img,content} = this.state;
     console.log("inside createpost", {title})
      axios.post('/api/posts',{title,img,content}).then( response => {
          console.log("inside create" , response.data);
        this.setState({ messages: response.data });
    
      });
    }
  render() {
    return (
      <div className="App">
   <div>

<form onSubmit = {this.post}>
        <label>
     Title
     <input type="text"
             placeholder ="Enter Title!!"
            value ={this.state.title}
            onChange={this.title}/>
        </label>
        <br />
        <label>
     Image 
     <input className='info-box'
             placeholder ="Give your thoughts!!"
             value ={this.state.image_url}
             onChange={this.imageUrl}/>
        </label>

        <label>
    Content
     <input className='info-box'
             placeholder ="Give your thoughts!!"
             value ={this.state.content}
             onChange={this.content}/>
        </label>

      </form>

<button onClick ={this.createPost}> Post </button>

<span> {this.state.messages}</span>



  </div>
      </div>
    );
  }
}

export default App;
