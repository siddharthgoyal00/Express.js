const express = require("express")
const zod = require("zod")
const app = express ();

const schema = zod.array(zod.number());
// write a zod schema to check the user has entered the correct email
// have @ .com which is string 
// password atleast 8 letters 
//country us or ind 
const schemaZod = zod.object({
   email: zod.string(),
   password: z.string(),
   country : z.literal("IND").or(z.literal("US")) 
})

app.use(express.json());
app.post("/health-checkkup", function(req,res){
    const kidneys = req.body.kidneys;
    
    const response = schemaZod.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: " input is Wrong "
        })
    } else {
        res.send({
            response
        })
    }
    
});

app.listen(3000);
