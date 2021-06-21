import {
    Table,
    Tbody,
    TableCaption
  } from "@chakra-ui/react";
  import { Fila } from "./Fila";

export const Tabla = () => {
    return(
        <Table w='90%' variant="striped" colorScheme="teal">
            <TableCaption>Wurm UP JavaScript</TableCaption>
            <Tbody>
                <Fila/>
            </Tbody>
        </Table>
    )
}