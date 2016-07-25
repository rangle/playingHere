export function getUpcomingShows(showList){
  return {
    type: 'GET_SHOWS',
    data: showList
  }
}
