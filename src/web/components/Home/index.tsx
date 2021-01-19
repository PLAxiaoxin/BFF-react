import React,{ FC } from 'react';
// import { Link } from 'react-router-dom';
import './index.css';
// import { useRecoilValue } from 'recoil';
// import { getAllBooks } from '../../models/selectors/books';
import  axiosInstance  from './../../api/config';

// 前后台联通测试
axiosInstance.get('/api/list').then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


interface User {
    name: string,
    id:number    
}

type myBool = true | false;

const mybool: myBool = true;

class UserAccount{
    name: string
    id:number 

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

type WindowStates = "open" | "closed" | "minimized";
const windowStates: WindowStates ='open';
const user: User = new UserAccount('jay',10);
console.log(user,windowStates)

const Home:FC = ()=>{
    // const homeData = useRecoilValue(getAllBooks);
    return <div className='home-container'><h1>VIP</h1></div>
}

export default Home;
