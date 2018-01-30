export function addNumber(num) {
  return {
    type: 'ADD',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num);
      }, 2000);
    })
  };
}
export function subtractNumber(num) {
  return {
    type: 'SUBTRACT',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num);
      }, 2000);
    })
  };
}
