import express from "express";
const app=express();
app.use(express.json());
const PORT=process.env.PORT||3000;
app.get("/",(req,res)=>{
    res.json({
        message:"Notes Api is running",
    });
});
app.get("/health",(_req,res)=>{
    res.json({
        status:"ok",
        message:"health is okay",
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});