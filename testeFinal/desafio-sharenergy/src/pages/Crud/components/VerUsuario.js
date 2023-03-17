import React from "react";
import { Button } from '../StyledCrud';

const VerUsuario = ({value, handleEditClick,handleDeleteClick}) =>{
    return(
        <tr>
            <td>{value.nome}</td>
            <td>{value.email}</td>
            <td>{value.fone}</td>
            <td>{value.cpf}</td>
            <td>
                <Button onClick={(event)=> handleEditClick(event,value)}>Editar</Button>
                <Button onClick={() =>handleDeleteClick(value.id)}>Deletar</Button>
            </td>
        </tr>
    )

}

export default VerUsuario