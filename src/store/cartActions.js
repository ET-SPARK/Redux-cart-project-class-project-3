import { cartActions } from "./cartSlice";
import { uiActions } from "./UiSlice";

export const fetchData = () => {
    return async(dispatch) => {

        const fetchHandler = async() => {
            const res = await fetch("'https://redux-http-fc3f2-default-rtdb.firebaseio.com/cartItems.json")
            const data = await res.json();
            return data
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        } catch (error) {
            
        }
    }
}



export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sending Request!",
            type: 'warning'
          }))
          const sendRequest = async () => {
            const res = await fetch(
              'https://redux-http-fc3f2-default-rtdb.firebaseio.com/cartItems.json' , 
              {
              method: "PUT",
              body: JSON.stringify(cart)
              }
            );
              await res.json();
          dispatch(uiActions.showNotification({
            open: true,
            message: "Sending Request to database successfully!",
            type: 'success'
          }))
        };
        try {
            await sendRequest()
        } catch (error) {
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sending Request Failed!",
                type: 'error'
              }))
        }
    }
}