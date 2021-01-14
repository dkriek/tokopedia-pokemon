import React, { useState, useEffect } from "react";
import axios from "axios";
 
function Abilities(props) {
    const [singlepost, setPost] = useState(null); 
    let effect = [];
    let content = "";  

    useEffect(() => {
        axios.get(props.url).then((response) => {
          setPost(response.data);
        });
      }, [props.url]);

      if (singlepost) {
        effect = singlepost.effect_entries
        console.log(effect)
        return(content = (
            <span>
            {
                effect.length > 0 ? effect.map((value,index) => ( 
                    <span key={index}>                   
                       {
                         value.language.name === "en" ?   content = content + value.effect : null                          
                       }
                    </span>    
                )) : null  
            }
            </span>
        ));
      }
      
      return ( <span>{content}</span>);
        // axios
        //   .get(props.url)
        //   .then((res) => {
        //     const data = res.data;
        //     console.log(data);
        //     effect_entries = data
            // const slice = data.slice(
            //   this.state.offset,
            //   this.state.offset + this.state.perPage
            // );
           // const postData = slice.map((post, key) => (
              //<React.Fragment>
                //<Posttemplate post={post} />
               // {/* <p>Contents: {post.content} </p> */}
             // </React.Fragment>
           // ));
    
           // this.setState({
              //pageCount: Math.ceil(data.length / this.state.perPage),
    
              //postData
           // });
        //  });
      
    
}

export default Abilities;
