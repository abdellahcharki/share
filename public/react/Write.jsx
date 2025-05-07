 
const { useState, useEffect , useRef} = React;

function WritePage(params) {
    const editorRef = useRef(null);

  
    useEffect(() => {
        if (!window.EditorJS) {
            console.error('EditorJS not loaded');
            return;
          }
          editorRef.current = new window.EditorJS(editorConfig );
          return () => {
            if (editorRef.current) {
              editorRef.current.destroy();
            }
          };
    })

    return(<div className="container">
        <input type="text" placeholder="1" />
        <hr />
        <div id='editorjs'> </div>
    </div>)
}
 


ReactDOM.render(<WritePage />, document.getElementById("root"));
