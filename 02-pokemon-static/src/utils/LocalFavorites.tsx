export const getFavoriteList = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const toggleFavorite = (id: number) => {
  const favorites = getFavoriteList();

  if (!favorites.includes(id)) {
    favorites.push(id);
  } else {
    const favoriteToRemove = favorites.indexOf(id);
    favorites.splice(favoriteToRemove, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const checkIsFavorite = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  const favorites = getFavoriteList();
  return favorites.includes(id);
};

const favoriteManagement = { toggleFavorite, checkIsFavorite, getFavoriteList };

export default favoriteManagement;
