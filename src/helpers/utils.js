// @flow

export const sortMoviesByRating: Object  = (arr: Array<mixed>, isSortASC: boolean) => {
  if(isSortASC) {
    return arr.sort((a: Object,b: Object) => (a.vote_average - b.vote_average))
  } else {
    return arr.sort((a: Object,b: Object) => (b.vote_average - a.vote_average))
  }
};

export const sortMoviesByDate: Object = (arr: Array<mixed>, isSortASC: boolean) => {
  if(isSortASC) {
    return arr.sort((a: Object,b: Object) => (new Date(a.release_date) - new Date(b.release_date)))
  } else {
    return arr.sort((a: Object,b: Object) => (new Date(b.release_date) - new Date(a.release_date)))
  }
};

export const removeSpecialSymbols = (string: string): string => {return string.replace(/[^A-Z0-9]/ig, "_")};
