import crypto from "crypto";

function rollDie(faces) {
    return crypto.randomInt(1, faces + 1);
}

export function rollDiceSet(parsed) {
    const breakdown = [];
    let total = 0;

    for (const group of parsed.dice) {
        const groupRolls = [];
        for (let i = 0; i < group.count; i++) {
            const roll = rollDie(group.faces);
            groupRolls.push(roll);
            total += roll;
        }
        breakdown.push({ faces: group.faces, rolls: groupRolls });
    }

    total += parsed.modifier;

    return { breakdown, total };
}