const initialData = {
  cart_item:[]
}

export const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART": return{cart_item: [...state.cart_item,action.payload]}
    case "REMOVE_CART":
          return {
            cart_item:[...state.cart_item.filter(item=>item.id!=action.payload)]
  }
}
return state
}