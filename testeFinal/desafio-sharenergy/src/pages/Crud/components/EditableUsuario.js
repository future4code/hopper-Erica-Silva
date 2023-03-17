import React from "react";
import { Button, Input } from '../StyledCrud';

const EditableUsuario = ({ handleEditChange, data, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <Input
                    type="text"
                    required="required"
                    placeholder="novo nome"
                    name="nome"
                    defaultValue={data.nome}
                    onChange={handleEditChange}>

                </Input>
            </td>
            <td>
                <Input
                    type="email"
                    required="required"
                    placeholder="novo email"
                    name="email"
                    defaultValue={data.email}
                    onChange={handleEditChange}>

                </Input>
            </td>
            <td>
                <Input
                    type="number"
                    required="required"
                    placeholder="novo telefone"
                    name="fone"
                    defaultValue={data.fone}
                    onChange={handleEditChange}>

                </Input>
            </td>
            <td>
                <Input
                    type="number"
                    required="required"
                    placeholder="novo cpf"
                    name="cpf"
                    defaultValue={data.cpf}
                    onChange={handleEditChange}>

                </Input>
            </td>
            <td>
               <Input name="id" type="hidden" value={data.id} />
               <Button>Salvar</Button>
               <Button onClick={handleCancelClick}>Cancelar</Button>
            </td>
        </tr>
    )
}

export default EditableUsuario