 
const { useState, useEffect } = React;
 


 

function HomePosts() {

  return (
    <div className="container">
      <div className="row">
         <div className="col-12">
            <Post />
            <hr />
            <Post />
            <hr />
            <Post />
            <hr />
            <Post />
            <hr />
            <Post />
            <hr />
            <Post />
            <hr />
            <Post />
            <hr />
            <Post />
         </div>
      </div>

    </div>
  );
}


ReactDOM.render(<HomePosts />, document.getElementById("root"));
