
export function find (list, iteratee, this_arg) {
  for( var i = list.length - 1; i >= 0 ; i-- ) {
    if( iteratee.call(this_arg, list[i]) ) return list[i];
  }
}

export function removeWhen (list, iteratee, this_arg) {
  for( var i = list.length - 1; i >= 0 ; i-- ) {
    if( iteratee.call(this_arg, list[i]) ) list.splice(i, 1);
  }
}

export function removeItem (list, item) {
  for( var i = list.length - 1; i >= 0 ; i-- ) {
    if( list[i] === item ) list.splice(i, 1);
  }
}

export function remove (list, iteratee, this_arg) {
  if( iteratee instanceof Function ) return removeWhen(list, iteratee, this_arg);
  return removeItem(list, iteratee);
}
