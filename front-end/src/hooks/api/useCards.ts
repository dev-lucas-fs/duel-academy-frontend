import useAsync from '../useAsync';

import * as cardAPI from '../../services/cardAPI';

export default function useCards() {
  const {
    loading: cardsLoading,
    error: cardsError,
    act: cards
  } = useAsync((name: string) => cardAPI.getCards(name), false);

  return {
    cardsLoading,
    cardsError,
    cards
  };
}