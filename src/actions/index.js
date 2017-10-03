export const AddTopTenSongs = 'AddTopTenSongs';
export function addTopTenSongs (data) {
  return {
    type: AddTopTenSongs,
    data
  }
}

export const ArrowClickedFirst = 'ArrowClickedFirst';
export function arrowClickedFirst (data) {
  return {
    type: ArrowClickedFirst,
    data
  }
}

export const ArrowClickedLast = 'ArrowClickedLast';
export function arrowClickedLast (data) {
  return {
    type: ArrowClickedLast,
    data
  }
}
