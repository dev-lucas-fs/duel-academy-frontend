import useAsync from '../useAsync';

import * as cardAPI from '../../services/cardAPI';

export default function useCard() {
  const {
    loading: cardLoading,
    error: cardError,
    act: card
  } = useAsync((id: number) => cardAPI.getCardById(id), false);

  return {
    cardLoading,
    cardError,
    card
  };
}