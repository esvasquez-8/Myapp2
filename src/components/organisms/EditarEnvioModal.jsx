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
}

export default EditarEnvioModal;