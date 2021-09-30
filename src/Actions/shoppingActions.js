import {AddShoppingItems,MyCardItems,DeleteMyCard,IncrementItemByUser,DecrementItemByUser,AddressUser} from './actionTypes';

export const addShoppingFunction = (Data) => dispatch =>{
console.log(Data,"this is shopping items data")
    // console.log(Data);
    dispatch({
        payload:Data,
        type:AddShoppingItems
    })
}
export const addMyCardItem = (Data) => dispatch =>{
    // console.log("This Is User My Card Data")
    // console.log(Data);
    dispatch({
        payload:Data,
        type:MyCardItems
    })
}

export const deleteMyCardfunction = Data =>dispatch=>{
    // console.log("This Delete Action");
    // console.log(Data);
    dispatch({
        payload:Data,
        type:DeleteMyCard
    })
}
export const incrementItemsFunction = Data => dispatch=>{

    dispatch({
        payload:Data,
        type:IncrementItemByUser
    })
}
export const decrementItemsFunction = Data => dispatch=>{

    dispatch({
        payload:Data,
        type:DecrementItemByUser
    })
}
export const addressAdditionfuntion =Data=>dispatch=>{

    dispatch({
        payload:Data,
        type:AddressUser
    })
}