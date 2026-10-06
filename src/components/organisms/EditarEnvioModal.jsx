import React, {useEffect} from "react";
import { Modal, Form, Input, Select } from 'antd';

const EditarEnvioModal = ({open, dato, oncancel, onGuardar}) => {

    const[form] = Form.useForm();

    useEffect(() => {
        if (open && dato){
            form.setFieldsValue({
                destinatario: dato.destinatario,
                direccion: dato.direccion,
                estado: dato.estado,
            });
        }
    }, [dato, form, open]);

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                onGuardar(values);
            })
        .catch((info) => {
            console.error("error de validacion:", info);
        });
    };

    return (
        <Modal
        title="Editar Envio"
        open={open}
        onOk={handleOk}
        onCancel={oncancel}
        okText="Guardar"
        cancelText="Cancelar"
        destroyOnClose
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Destinatario"
                    name="destinatario"
                    rules={[{required: true, message: 'Ingrese el destinatario del envio.'}]}
                    >
                    <input/>
                </Form.Item>

                <Form.Item
                    label="Destinatario"
                    name="direccion"
                    rules={[{required: true, message: 'Ingrese una direccion.'}]}
                    >
                    <input/>
                </Form.Item>

                <Form.Item
                label="Estado"
                name="Estado"
                rules={[{required: true, message: 'Seleccione una estado.'}]}
                >
                    <Select
                        options={[
                            {value: 'Pendiente', label: 'Pendiente'},
                            {value: 'En transito', label: 'En transito'},
                            {value: 'Entregado', label: 'Entregado'},
                        ]}
                        />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditarEnvioModal;