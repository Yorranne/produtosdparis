import db from "@/lib/db"

export default pagina = async () => {
    const usuario = await db.query("select * from usuario")
 return (<>
    <h1>Lista de usuarios</h1>
    <div>
      {
         usuario.rows.map( 
            a => (
               <div key={a.id}>
                  {a.nome} faz parte do projeto {a.cargo}
               </div>
            ) 
         )
      }
   </div>
 </>);
}