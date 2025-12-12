export function parseExpression(rawExpr) {
    if (!rawExpr || typeof rawExpr !== "string") throw new Error("Expressão inválida");

    let expr = rawExpr.trim().toLowerCase();

    expr = expr.replace(/(\d)\s+(\d)/g, "$1+$2");

    expr = expr.replace(/\s+/g, "");

    if (!/^[0-9d+\-()]+$/i.test(expr)) {
        throw new Error("Expressão contém caracteres inválidos");
    }

    const allowedFaces = [4, 6, 8, 10, 12, 20, 100];

    const dicePattern = /(\d*)d(\d+)/g;
    const dice = [];
    let match;
    while ((match = dicePattern.exec(expr)) !== null) {
        const count = Number(match[1]) || 1;
        const faces = Number(match[2]);

        if (count < 1 || count > 100) {
            throw new Error("Quantidade de dados inválida (1 a 100).");
        }
        if (!allowedFaces.includes(faces)) {
            throw new Error(`Faces inválidas: d${faces}. Permitidos: d4, d6, d8, d10, d12, d20, d100.`);
        }
        dice.push({ count, faces });
    }

    if (dice.length === 0) {
        throw new Error("Nenhum dado encontrado na expressão.");
    }

    const modifierPattern = /([+-]\d+)$/;
    const modMatch = expr.match(modifierPattern);
    const modifier = modMatch ? Number(modMatch[1]) : 0;

    return { dice, modifier, raw: rawExpr };
}