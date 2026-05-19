// Middleware för att validera data innan den skickas till databasen.

export const validateAppointment = (req, res, next) => {
    const { datum, behandling, kostnad, vetID, djurID } = req.body;

    if (
        !datum ||
        !behandling ||
        kostnad == null ||
        vetID == null ||
        djurID == null
    ) {
        return res.status(400).json({
            error: 'Alla fält måste fyllas i'
        });
    }

    if (typeof behandling !== "string" || behandling.trim() === "") {
        return res.status(400).json({
            error: 'Behandling måste vara text'
        });
    }

    if (typeof kostnad !== "number" || kostnad < 0) {
        return res.status(400).json({
            error: 'Kostnad måste vara ett positivt nummer'
        });
    }

    if (!Number.isInteger(vetID) || vetID <= 0) {
        return res.status(400).json({
            error: 'Ogiltigt veterinär-ID'
        });
    }

    if (!Number.isInteger(djurID) || djurID <= 0) {
        return res.status(400).json({
            error: 'Ogiltigt djur-ID'
        });
    }
    const parsedDate = new Date(datum);

    if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({
            error: 'Ogiltigt datum'
        });
    }
    
    next();
};
