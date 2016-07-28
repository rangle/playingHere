const ALL_REASONS_ENDPOINT = 'http://beta.json-generator.com/api/json/get/Vk27QAP8Z?delay=1500';

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

function setAllReasons(reasonsArray){
  return {
    type: 'SET_REASONS',
    data: reasonsArray
  }
}

export function asyncSetAllReasons() {
  return (dispatch) => {
    $.get(ALL_REASONS_ENDPOINT)
      .then(res => dispatch(setAllReasons(res)))
  }
}
