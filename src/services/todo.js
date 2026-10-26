import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    // Ensure every newly added task text ends with a fireworks emoji (U+1F386).
    // If the caller already included the emoji, don't duplicate it.
    const FIREWORKS = '🎆';
    const text = (data && data.text) ? data.text.trim() : '';
    const textWithEmoji = text.endsWith(FIREWORKS) ? text : (text + ' ' + FIREWORKS);

    // Build the new item ensuring the normalized text wins.
    let item = Object.assign({}, (data || {}), {
        id: getNextId(),
        text: textWithEmoji
    });

    return list.concat([item]);
}
