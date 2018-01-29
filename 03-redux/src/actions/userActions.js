export function setName(name) {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: 'SET_NAME',
  //       payload: name
  //     })
  //   }, 2000); // to simulate async with thunk
  // };
  return {
    type: 'SET_NAME',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  }; // to simulate an ajax call or something
}
export function setAge(age) {
  return {
    type: 'SET_AGE',
    payload: age
  };
}
