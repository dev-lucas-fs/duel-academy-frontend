import useAsync from '../useAsync';

import * as deckAPI from '../../services/deckAPI';
import useToken from '../useToken';

export default function useUserDeck() {
    const { getToken } = useToken()
    const token = getToken()
    if(!token)
        throw "No Token"

    const {
        loading: userDeckLoading,
        error: userDeckError,
        act: userDeck
    } = useAsync(() => deckAPI.getUserDecks(token), false);

    return {
        userDeckLoading,
        userDeckError,
        userDeck
    };
}