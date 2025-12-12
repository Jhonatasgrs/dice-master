export function parseExpression(rawExpr) {
    if (!rawExpr || typeof rawExpr !== "string") throw new Error("Expressão inválida");

    let expr = rawExpr.trim().toLowerCase();

    expr = expr.replace(/(\d)\s+(\d)/g, "$1+$2");

    expr = expr.replace(/\s+/g, "");

    if (!/^[0-9d+\-()]+$/i.test(expr)) {
        throw new Error("Expressão contém caracteres inválidos");
    }

    const dicePattern = /(\d*)d(\d+)/g;
    const dice = [];
    let match;
    while ((match = dicePattern.exec(expr)) !== null) {
        const count = Number(match[1]) || 1;
        const faces = Number(match[2]);

        if (count < 1 || count > 500) throw new Error("Quantidade de dados inválida (min 1, max 500)");
        if (faces < 2 || faces > 10000) throw new Error("Número de faces inválido (min 2, max 10000)");
        dice.push({ count, faces });
    }

    const modifierPattern = /([+-]\d+)$/;
    const modMatch = expr.match(modifierPattern);
    const modifier = modMatch ? Number(modMatch[1]) : 0;

    return { dice, modifier, raw: rawExpr };
}