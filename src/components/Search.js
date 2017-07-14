/**
 * Created by zhangxu on 2017/7/11.
 */
import React from "react";

class Search extends React.Component{
    search=()=>{
        let searchName = this.refs.searchName.value;
        this.props.setSearchName(searchName);

    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="searchName"/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
export default Search;

