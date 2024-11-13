import express from "express";

export const startServer=(options)=> {
    const {port,public_path}=options

    const app=express()

    app.use(express.static(public_path))

    app.get('*',(req,res)=> {
        const indexpath=path.join(_dirname+ `../../../${public_path}/index.html`)
        res.sendFile(indexpath)
    })

    app.listen(port,()=> {
        console.log(`Escuchando desde el puerto ${port}`)
    });
}