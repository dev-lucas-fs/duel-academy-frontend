import useAsync from '../useAsync';

import * as deckAPI from '../../services/deckAPI';
import useToken from '../useToken';

export default function useSaveDeck() {
    const { getToken } = useToken()
    const token = getToken()
    let error = ""

    if(token === null)
        error = "No Token"

    const {
        loading: saveDeckLoading,
        error: saveDeckError,
        act: saveDeck
    } = useAsync(({ cards, name }: { cards: Array<number>, name: string }) => deckAPI.saveDeck({ cards, name, token }), false);

    return {
        tokenError: error,
        saveDeckLoading,
        saveDeckError,
        saveDeck
    };
}