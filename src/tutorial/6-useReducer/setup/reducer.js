const reducer =(state, action)=> {
  if(action.type === 'ADD_ITEM'){

    const newPeople = [...state.people, action.payload]

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added'
    }
  }

  if(action.type === 'NO_VALUE'){
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Enter Value'
    }
  }

  if(action.type ==='CLOSE_MODAL'){
    return{ ...state, isModalOpen: false }
  }

  if(action.type ==='REMOVE_ITEM'){
    
    const newPeople = state.people.filter( person => person.id !== action.payload)
   

    return( {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Remove Item'
    })
  }

  // default return
  // return state or 
  throw new Error (' No matching action type')
}

export default reducer