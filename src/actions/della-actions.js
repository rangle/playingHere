export function addReason(reason){
  return {
    type: 'ADD_REASON',
    data: reason
  }
}

export function removeReason(reasonText){
  return {
    type: 'REMOVE_REASON',
    data: reasonText
  }
}

export function setAllReasons(reasonsArray){
  return {
    type: 'SET_REASONS',
    data: reasonsArray
  }
}
