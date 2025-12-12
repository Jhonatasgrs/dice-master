export function parseExpression(expr) {
    expr = expr.replace(/\s+/g, "").toLowerCase();

    const dicePattern = /(\d*)d(\d+)/g;
    const dice = [];
    let match;

    while ((match = dicePattern.exec(expr)) !== null) {
        const count = Number(match[1]) || 1;
        const faces = Number(match[2]);
        dice.push({ count, faces });
    }

    const modifierPattern = /([+-]\d+)$/;
    const modMatch = expr.match(modifierPattern);

    const modifier = modMatch ? Number(modMatch[1]) : 0;

    return { dice, modifier };
}