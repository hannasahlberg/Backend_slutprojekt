//Dessa funktioner används av service-lagret för att utföra SQL-frågor mot databasen. 
import { query } from "../config/db.js";
export const findAll = async (vetID) => {
    let sql = 
        `SELECT besok.behandling, besok.datum, djur.namn AS djur, CONCAT(veterinar.fnamn, ' ', veterinar.enamn) AS veterinar, veterinar.vetID,
         CONCAT(agare.fnamn, ' ', agare.enamn) AS agare FROM besok INNER JOIN veterinar ON besok.vetID = veterinar.vetID 
         INNER JOIN djur ON djur.djurID = besok.djurID INNER JOIN agare ON agare.agarID = djur.agarID`;

         const params = [];

         if (vetID) {
            sql += ' WHERE besok.vetID = ?';
            params.push(vetID);
        }
    
        return await query(sql, params);
}

export const findById = async (id) => {
    const rows = await query('SELECT * FROM besok WHERE besoksID = ?', [id]);
    return rows[0] ?? null;
  };

  export const count = async () => {
    return await query ('SELECT COUNT(*) AS antal_besok FROM besok');
  }

export const create = async ({datum, behandling, kostnad, vetID, djurID }) => {
    return await query(
        'INSERT INTO besok (datum, behandling, kostnad, vetID, djurID) VALUES (?, ?, ?, ?, ?)',
        [datum, behandling, kostnad, vetID, djurID]
    );
}

export const update = async (id, { datum, behandling, kostnad, vetID, djurID }) => {
    return await query(
        'UPDATE besok SET datum = ?, behandling = ?, kostnad = ?, vetID = ?, djurID = ? WHERE besoksID = ?',
        [datum, behandling, kostnad, vetID, djurID, id]
    )
}

export const remove = async (id) => {
    return await query(
        'DELETE FROM besok WHERE besoksID = ?',
        [id]
    )
}