import { Router } from "express";
import { parseExpression } from "./diceParser.js";
import { rollDiceSet } from "./diceRoller.js";

const router = Router();

router.get("/roll", (req, res) => {
    const expr = req.query.expr;

    if (!expr)
        return res.status(400).json({ error: "Parâmetro 'expr' é obrigatório." });

    try {
        const parsed = parseExpression(expr);
        const result = rollDiceSet(parsed);

        res.json({
            expression: expr,
            breakdown: result.breakdown,
            total: result.total,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;