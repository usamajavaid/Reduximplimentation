import {MyCardItems,DeleteMyCard,AddressUser,IncrementItemByUser,AddShoppingItems,DecrementItemByUser} from '../Actions/actionTypes';
import history from '../Routing/history';
import { act } from 'react-dom/test-utils';

const state={
    mycardItems:[],
    addressUser:{fName:"",lName:"",address:"",city:"",postelCode:"",pNumber:"",country:"",email:"" },
    shoppingItems:[],
    quantity1:1,
    id:0
}


function myCardsItems12 (mState = {...state}, action){
    switch(action.type){
        case AddShoppingItems:
            if(action.type === null || action.payload === undefined){

            }else{
                console.log(action.payload,"this is reducer")
                mState.shoppingItems.push(action.payload);
                
                // mState.shoppingItems.map(ls=>{
                //     if(ls.id !== action.payload.id){
                //         mState.shoppingItems.push(action.payload);
                //     }else{
                //         alert('Sorry');
                //     }
                // })
                mState.shoppingItems.map(ls=>{if(ls.id === action.payload.id){
                    console.log('This Is Original Quantity');
                  console.log(ls.quantity);
                  mState.quantity1=ls.quantity;
                  console.log(mState.quantity1);
                }
            })
            }
            return deepCopy(mState);         
        case MyCardItems:
            if(action.payload === null || action.payload === undefined){

            }else{
                    mState.mycardItems.push(action.payload);
                
            }
            return deepCopy(mState);
        case DeleteMyCard:
            if(action.payload === null || action.payload === undefined){

            }else{
                mState.mycardItems = mState.mycardItems.filter(ls => ls.id !== action.payload)
            }
            return deepCopy(mState);
        case IncrementItemByUser:
            if(action.payload === null || action.payload === undefined){

            }else{
                     
                         mState.mycardItems.map(ls=>{if(ls.id === action.payload.id){
                            console.log('this myCard Quantity');
                            console.log(ls.quantity);
                            console.log('this is reducer State quantity ');
                            console.log(mState.quantity1);
                            {
                              if(mState.quantity1 > ls.quantity){
                                ls.quantity = ls.quantity+1
                              }else{
                                 
                                  alert('Sorry Brother');
                              }

                            }

                        }

                    })

            }
            return deepCopy(mState);
        case DecrementItemByUser:
            if(action.payload === null || action.payload === undefined){

            }else{
                     
                         mState.mycardItems.map(ls=>{if(ls.id === action.payload.id){
                            console.log('this myCard Quantity');
                            console.log(ls.quantity);
                            console.log('this is reducer State quantity ');
                            console.log(mState.quantity1);
                            {
                              if(ls.quantity > 0){
                                ls.quantity = ls.quantity-1
                              }else{
                                 
                                  alert('Sorry Brother');
                              }

                            }

                        }

                    })

            }
            return deepCopy(mState);

        case AddressUser:
            if(action.type === null || action.payload === undefined){

            }else{
                  
                mState.addressUser=action.payload;
                console.log(mState.addressUser);
                history.push("/Components/userSelectedItems")
            }
            return deepCopy(mState);
        default:
            return deepCopy(mState);

    }
}



const deepCopy = obj => {
    const newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
};
export default myCardsItems12;