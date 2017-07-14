/**
 * Created by zhangxu on 2017/7/11.
 */
import React from "react";
import axios from "axios";

class List extends React.Component{
    constructor(props){
        super(props);
        // 初始化状态
        this.state = {
            firstView: true, //是否显示初始页
            loading: false, // 是否正在请求中
            users: null, // 请求获取的列表数据
            errorMsg: null // 请求错误的信息
        }
    }

    // 监视接收prop的变化
    componentWillReceiveProps(nextProps){
        //正在努力加载
        this.setState({
            firstView: false,
            loading: true,
        });
        let url = `https://api.github.com/search/users?q=${nextProps.searchName}`;
        axios.get(url)
            .then( (response)=> {
                console.log(response.data);
                this.setState({
                    loading:false,
                    users:response.data.items
                })
            }).catch((error)=> {
            console.log(error);
            this.setState({
                loading:false,
                errorMsg:true
            })
        })

    }
    render(){
        let {firstView,loading,users,errorMsg} = this.state;
        if(firstView){
            return (<div>Enter name to search</div>)
        }else if(loading){
            return (<div>loading</div>)
        }else if(errorMsg){
            return (<div>请求出错了</div>)
        }else{
            return (
                <div className="row">
                    {
                        users.map((user,index)=>{
                            return (
                                <div className="card" key={index}>
                                    <a href={user.html_url} target="_blank">
                                        <img src={user.avatar_url} style={{width: "100px"}}/>
                                    </a>
                                    <p className="card-text">{user.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

    }
}
export default List;

