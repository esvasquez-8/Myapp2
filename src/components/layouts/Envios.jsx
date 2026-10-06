import React, {useState} from "react";
import {Table} from "antd";

const columnas = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    {
        title: 'Destinatario',
        dataIndex: 'destinatario',
        key: 'destinatario',
    },
    { title: 'Dirección', dataIndex: 'direccion', key: 'direccion' },
    { title: 'Estado', dataIndex: 'Estado', key: 'Estado' },
    { title: 'Acciones', dataIndex: 'Acciones', key: 'Acciones' },
];
const Envios = ({datos = []}) => {
    const [cantidad, setCantidad] = useState(0);

    return (
        <div>
            <h1 style={{color: "#000000"}}>Envios</h1>

            <p>Envios registrados: {cantidad}</p>
            <button onClick={() => setCantidad(cantidad + 1)}>
                Agregar envio
            </button>
            <Table
                columns={columnas}
                dataSource={datos}
                rowKey="id"
                pagination={false}
            />
        </div>
    );
};

export default Envios;