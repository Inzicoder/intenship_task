import React, { Component } from 'react';


// const NoteSearch =(props)=>{ 
//         return (
//           <div>
//         <input className="noteSearch" type="search" placeholder="Search..." onChange={props.onSearch}/>
//           </div>        
//         );
// }

class NoteSearch extends Component{

  state={
    search:''
  }


  searchChange(e){
    this.setState({
      search:e.target.value
    })
  }

  render(){

    const {notes} = this.props;
    let libdata=[];
    const searchKey=this.state.search.trim().toLowerCase();
    if(searchKey&& searchKey.length>0){
      libdata= notes.filter(i=>{
        return i.title.toLowerCase().match(searchKey);
      })
    }
    return(
      <div>
       <input className="noteSearch" value={this.state.search} type="search" placeholder="Search..." onChange={(e)=>this.searchChange(e)}/>
       <ul>
         {
           libdata.map((i,index)=>{
               return <li key={index}>{i.title}</li>
           })
         }
       </ul>
      </div>
    )
  }
}

export default NoteSearch