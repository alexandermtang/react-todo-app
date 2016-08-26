export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export function addItem(task) {
  return {
    type: ADD_ITEM,
    payload: {
      task: task,
      completed: false
    }
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    payload: index
  };
}

export function editItem(task, index) {
  return {
    type: EDIT_ITEM,
    payload: {
      newTask: task,
      index: index
    }
  };
}

export function toggleItem(index) {
  return {
    type: TOGGLE_ITEM,
    payload: index
  };
}
