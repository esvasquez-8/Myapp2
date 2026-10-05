import { useEffect, useState} from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button} from 'antd';
import Envios from "./components/layouts/Envios.jsx";
import Agregar from "./components/layouts/Agregar.jsx";
import Configuracion from "./components/layouts/Configuracion.jsx";
const { Sider, Content } = Layout;
const App = () => {
  const [collapsed] = useState(true);
  const [index, setIndex] = useState('1');
  const [datos, setDatos] = useState([]);
  const [datoEditando, setDatoEditando] = useState(null);
  const [modalEditarAbierto, setModalEditarAbierto] = useState(false);

  const eliminarDato = (id) =>{
      setDatos((datosActuales) =>
        datosActuales.filter((dato) => dato.id !== id),
      );
  };

  const abrirEdicion = (dato) => {
      setDatoEditando(dato);
      setModalEditarAbierto(true);
  };

  const crearAcciones = (dato) =>(
      <>
      <Button icon={<EditOutlined />} onClick={() => abrirEdicion(dato)}>
        Editar
      </Button>
      <Button
        danger
        icon={<DeleteOutlined />}
        onClick={() => eliminarDato(dato.id)}
      >
        Eliminar
      </Button>
      </>
  );

 const [form] = Form.useForm();

  const agregarDato = (destinatario, direccion, estado) => {
      setDatos((datosActuales) =>{
          const  siguienteId =
              Math.max(0, ...datosActuales.map(({id}) => id)) + 1;

          const nuevoDato = {
              id: siguienteId,
              destinatario,
              direccion,
              Estado: estado,
          };

          return [
              ...datosActuales,
              {
                  ...nuevoDato,
                  Acciones: crearAcciones(nuevoDato),
              },
          ];
      });
  };

  const cargarDatosPrueba = () => {
      const datosPrueba = [
          { id: 1, destinatario: 'Ana Pérez', direccion: 'Av. Siempre Viva 123', Estado: 'Pendiente' },
          { id: 2, destinatario: 'Bruno García', direccion: 'Calle San Martín 456', Estado: 'En preparación' },
          { id: 3, destinatario: 'Carla López', direccion: 'Belgrano 789', Estado: 'Enviado' },
          { id: 4, destinatario: 'Diego Martínez', direccion: 'Rivadavia 101', Estado: 'Entregado' },
          { id: 5, destinatario: 'Elena Ruiz', direccion: 'Sarmiento 202', Estado: 'Pendiente' },
          { id: 6, destinatario: 'Federico Díaz', direccion: 'Mitre 303', Estado: 'En preparación' },
          { id: 7, destinatario: 'Gabriela Torres', direccion: 'Independencia 404', Estado: 'Enviado' },
          { id: 8, destinatario: 'Hugo Fernández', direccion: 'Moreno 505', Estado: 'Entregado' },
          { id: 9, destinatario: 'Inés Romero', direccion: 'Libertad 606', Estado: 'Pendiente' },
          { id: 10, destinatario: 'Julián Castro', direccion: 'Lavalle 707', Estado: 'Enviado' },
      ];

      setDatos(datosPrueba.map((dato) => ({
          ...dato,
          Acciones: crearAcciones(dato),
      })),
      );
  };

    useEffect(() => {
        cargarDatosPrueba();
    }, []);


  const cerrarEdicion = () => {
      setModalEditarAbierto(false);
      setDatoEditando(null);
  };

  const editarDato = (id, datosEditados) => {
      setDatos((datosActuales) =>
          datosActuales.map((dato) => {
              if (dato.id !== id) {
                  return dato;
              }

              const datoActualizado = {...dato, ...datosEditados, id};

              return {
                  ...datosActualizado,
                  Acciones: crearAcciones(datoActualizado),
              };
          }),
      );
  };

  const guardarEdicion = (datosEditados) =>{
      if(!datosEditando){
          return;
      }

      editarDato(datosEditando.id, datosEditados);
      cerrarEdicion();
  }


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[index]}
              onClick={({key}) => {setIndex(key)}}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
          />
        </Sider>
        <Layout>
          <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
          >
            {index === '1' && <Envios datos = {datos} />}
            {index === '2' && <Agregar/>}
            {index === '3' && <Configuracion />}
          </Content>
        </Layout>
          <EditarEnvioModal
              open={modalEditarAbierto}
              dato={datoEditando}
              onCancel={cerrarEdicion}
              onGuardar={guardarEdicion}
          />
      </Layout>
  );
};

export default App;