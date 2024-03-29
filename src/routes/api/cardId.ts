import { Router } from "express";
import { CardId } from "../../models";

const router = Router();

router.get('/:hash', async (req, res) => {
    const { hash } = req.params;
    try {
        const cardId = await CardId.findOne({ where: { hash } });
        if (cardId) {
            res.json({ isValid: cardId.isValid });
        } else {
            res.status(404).send('Card ID not found');
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An error occurred');
        }
    }
});

export default router;
