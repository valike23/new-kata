import { Entry } from "../../../Controllers/entries";
import { Pool } from "../../../Controllers/pools";


export async function get(req, res) {
    try {
     const resp = await  Pool.findAll({where:{id: req.query.id}, include: Entry}) ;
     res.json(resp);
    } catch (error) {
        
    }
}