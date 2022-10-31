import { createCompetition, Icompetition } from "../../Controllers/competition";


export async function post(req, res) {
    try {
        const body: Icompetition = JSON.parse(req.fields.body);
        console.log(body);
       const resp = await createCompetition(body);
       if(resp.status == 'success'){
        res.json(resp);
       }
       else{
        console.log(resp);
        res.status(503).json(resp)
       }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}