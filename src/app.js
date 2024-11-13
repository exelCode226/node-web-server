import { envs } from "./config/env.js"
import { startServer } from "./server/server.js"




const main=()=> {
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}
//Funcion agnositca Auto Convocada
//No tienen nombre y se ejecuta con los parentesis
(async()=> {
    main()
})()

