export const ADD_GOLD = 'ADD_GOLD';
export const REMOVE_GOLD = 'REMOVE_GOLD'

export const addGold = (gold) => {
    return {
        type: 'ADD_GOLD',
        gold: gold
    }
}

export const removeGold = (gold) => {
    return {
        type: 'REMOVE_GOLD',
        gold: gold
    }
}