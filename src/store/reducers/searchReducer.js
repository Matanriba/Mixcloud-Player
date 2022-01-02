import { storageService } from "../../services/storageService"

const INITIAL_STATE = {
    currSearchRes: [],
    currSearchTerm: '',
    currChosenTrack: null,
    recentSearches: storageService.load('RECENT_SEARCHES') || []
}

export function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_SEARCH_RES':
            return {
                ...state, currSearchRes: action.currSearchRes
            }
        case 'SET_SEARCH_TERM':
            return {
                ...state, currSearchTerm: action.currSearchTerm
            }
        case 'SET_CURR_TRACK':
            return {
                ...state, currChosenTrack: action.currChosenTrack
            }
        default: return state
    }
}