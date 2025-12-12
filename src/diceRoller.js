function rollDie(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

export function rollDiceSet(parsed) {
    const breakdown = [];
    let total = 0;

    for (const group of parsed.dice) {
        for (let i = 0; i < group.count; i++) {
            const roll = rollDie(group.faces);
            breakdown.push(roll);
            total += roll;
        }
    }

    total += parsed.modifier;

    return { breakdown, total };
}