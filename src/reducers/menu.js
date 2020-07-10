const menus = (state = [], action) => {
  switch (action.type) {
    case 'ADD MENU':
      return [
        ...state,
        action.menu
      ]
    default:
      return state;
  }
}

export default menus;