import { authenticate } from "../../Controllers/test";

export async function get(req, res){
   let resp = await authenticate();
   console.log(resp);
   res.json(resp);
}