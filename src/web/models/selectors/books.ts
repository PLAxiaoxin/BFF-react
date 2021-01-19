/*
 * @Author: your name
 * @Date: 2020-11-07 21:10:44
 * @LastEditTime: 2020-11-15 14:10:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/src/web/models/selectors/books.ts
 */
import { selector } from 'recoil';

function getData():Promise<string>{
    return new Promise((resolve) => setTimeout(()=>resolve('response data:123123'),600))
}

export const getAllBooks = selector({
    key: 'GetAllBooks',
    get: async ()=>{
        const result = await getData();
        return result; 
    }
})
