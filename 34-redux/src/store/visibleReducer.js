const initialState = {
  isvisible: '참',
};

const visibleReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case '참':
  //       return { isvisible: (state.isvisible = '거짓') };
  //     case '거짓':
  //       return { isvisible: (state.isvisible = '참') };
  //     default:
  //       return state;
  //   }
  return action.type === 'visible/isvisible'
    ? { isvisible: '거짓' }
    : { isvisible: '참' };
};

export default visibleReducer;
