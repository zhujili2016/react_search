/**
 * Created by zhangxu on 2017/7/11.
 */
import React from "react";

import Search from "./Search";
import List from "./List";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchName:""
        }
    }
    setSearchName=(searchName)=>{
        //修改状态
        this.setState({searchName})
    }
    render(){

        return (
            <div id="app">
                <div className="container">
                  <Search setSearchName={this.setSearchName}/>
                  <List searchName={this.state.searchName}/>

                </div>
            </div>
        )
    }
}
export default App;
