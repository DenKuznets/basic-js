const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!members) return false;
    let result = "";
    for (let i = 0; i < members.length; i++) {
        const element = members[i];
        if (typeof element === "string" && element.length > 0) {
            // element.search(/\S/) - returns index of 1st not whitespace char
            result += element[element.search(/\S/)].toUpperCase();
        }
    }

    return result ? result.split("").sort().join("") : false;
}

module.exports = {
    createDreamTeam,
};
