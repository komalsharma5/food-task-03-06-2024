import { createSlice,current } from "@reduxjs/toolkit"

//locat storage code
// const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [] 
// const totalQuantity = localStorage.getItem('totalQuantity') !== null? JSON.parse(localStorage.getItem('totalQuantity')) : 0
// const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0

//locat storage code
// const setItem = (items, totalQuantity, totalAmount) => {
//     localStorage.setItem('cartItems',JSON.stringify(items))
//     localStorage.setItem('totalQuantity',JSON.stringify(totalQuantity))
//     localStorage.setItem('totalAmount',JSON.stringify(totalAmount))
// }
const initialState = {
    cartItems:[], //local storage code change :items
    totalQuantity:0, //local storage code change olddata:totalQuantity
    totalAmount:0 //local storage code change olddata:totalAmount
}

const cartSlice = createSlice({

    name : 'cart',
    initialState ,
    reducers : {
         addItem(state,action){
            //console.log(action.payload);
            const newItem =action.payload;
           // console.log(newItem);

            const existingItem = state.cartItems.find(item =>item.id ===newItem.id)
            console.log(current(state.cartItems));
            state.totalQuantity++;
            
            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    image01:newItem.image01,
                    price:newItem.price,
                    totalQuantity:1,
                    totalprice:newItem.price
                })
            }else{
                existingItem.totalQuantity++;
                existingItem.totalprice = Number(existingItem.totalprice) + Number(newItem.price)
            }

            console.log('cartItems', current(state.cartItems));
            //return state
             
            // totalAmount code
            state.totalAmount = state.cartItems.reduce((total,item) => 
             total + Number(item.price) * Number(item.totalQuantity), 0)

            //localStorage code
            // setItem (
            //     state.cartItems.map((item) => item),
            //     state.totalQuantity,
            //     state.totalAmount
            // )
        },
        removeItem(state,action){
            const newItem = action.payload;

            const existingItem = state.cartItems.find(item =>item.id === newItem.id)
            console.log(current(state.cartItems));
            state.totalQuantity--;

            if(existingItem.totalQuantity === 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id)
            }else {
                existingItem.totalQuantity--;
                existingItem.totalprice = Number(existingItem.totalprice) - Number(existingItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total,item) => 
                total + Number(item.price) * Number(item.totalQuantity), 0)

            //localStorage code
            // setItem (
            //     state.cartItems.map((item) => item),
            //     state.totalQuantity,
            //     state.totalAmount
            // )
         },
         deleteItem(state,action){
            const newItem = action.payload;
             console.log(newItem);
             const existingItem = state.cartItems.find(item => item.id === newItem.id)

             if(existingItem){
                    state.cartItems = state.cartItems.filter(item => item.id !== newItem.id)
                    state.totalQuantity = state.totalQuantity - existingItem.totalQuantity
             }
             state.totalAmount = state.cartItems.reduce((total,item) => 
                total + Number(item.price) * Number(item.totalQuantity), 0)

             //localStorage code
            // setItem (
            //     state.cartItems.map((item) => item),
            //     state.totalQuantity,
            //     state.totalAmount
            // )
         }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice;