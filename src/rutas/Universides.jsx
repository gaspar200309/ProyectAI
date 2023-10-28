import React from 'react';
import './universidades.css';
import ImagenesApp from '../assets/ImagenesApp';

const Universidades = () => {
    const universidadesData = [
        {
            nombre: 'UMSS (Universidad Mayor de San Simón)',
            info: [
                {
                    imgU: ImagenesApp.imgAdministracion,
                    direccion: 'Direccion: Av. Oquendo y Jordan',
                    telefono: 'Teléfono: 4 4251515 - 4 4525161 - 4 4525161',
                    fax: 'Fax: 4530361',
                    correo: 'Correo: informaciones@umss.edu.bo',
                    enlace: 'https://www.umss.edu.bo/',
                },
              
            ],
            academia: 'Universidades',
        },

        {
            nombre: 'EMI (Escuela militar de ingeniería)',
            info: [
                {
                    imgU: ImagenesApp.imgElectronica,
                    direccion: 'Direccion Av. 23 de Marzo, Zona Muyurina',
                    telefono: 'Teléfono: 4531133 - 4530361',
                    fax: 'Fax: 4530361'
                    
                },
                {
                    direccion: 'Direccion: Av. Lanza entre Oruro y La Paz',
                    telefono: 'Teléfono: 4521844',
                    correo: 'Correo: cohabamba@adm.emi.edu.bo',
                }
            ],
            academia: 'Universidades',
        },
        {
            nombre: 'USIP (Universidad Simón I. Patiño)',
            info: [
                {
                    direccion:'Dirección: Av. Villazón Nro 22 Km. 1 a Sacaba',
                    telefono: 'Teléfono: (591-4) 4539930-4539875',
                    fax: 'Fax: (591-4) 4539910',
                    correo: 'Correo: info@usip.edu.bo'
                }
             
            ]
        }, 
        {
            nombre: 'Unicen',
            info: [
                {
                    direccion:'Sede Cochabamba - Torre Empresarial C. Santivañez y Junín Nº 240',
                    telefono: 'Teléfono: 4252987',
                }, 
                {
                    direccion:'Sede Cochabamba - Torre de Salud Av. Juan de la Rosa Nº 234',
                    telefono: 'Teléfono: 4038651',
                }
            ]
        },
        {
            nombre: 'UPB (Universidad Privada Boliviana)',
            info: [
                {
                    direccion:'Av. Cap. Victor ustariz Km 6 - 1/2',
                    telefono: 'Teléfono: 4268287',
                }
            ]
        }, 
        {
            nombre: 'UCB (Universidad Catolica Boliviana)',
            info: [
                {
                    direccion:'Z. Tupuraya/Calle M. Marquez esquina Parque Jorge Trigo Andia',
                    telefono: 'Teléfono: 4293100',
                }
               
            ]
        }, 
        {
            nombre: 'UCATEC (Univ. Pv. de Cs. Administrativas y Tecnológicas)',
            info: [
                {
                    direccion:'Campus Miraflores Calle Guillermo Añez esquina Mariano Borda',
                    telefono: 'Teléfono: 4200406',
                }, 
                {
                    direccion: 'Campus Centro C. Esteban Arce entre Jordán y Calama',
                    telefono: 'Teléfono: 4255295',
                }
            ]
        }, 
        {
            nombre: 'UPDS (Universidad Privada Domingo Savio)',
            info: [
                {
                    direccion: 'C. Irigoyen # 1555, Zona Sarco',
                    telefono: 'Teléfono: 442-1743',   
                    cel: 'Cel: 591 61681770'
                }
            ]
         
        },
        {
            nombre: 'UDABOL (Universidad de Aquino de Bolivia)',
            info: [
                {
                    direccion: 'Carretera a Sacaba, kilómetro 8 - 1/2. ',
                    telefono: 'Teléfono: 4273417',   
                    cel: 'Cel: 591 72135778'
                }
            ]
        },
        {
            nombre: 'UNIVALLE (Universidad Privada del Valle)',
            info: [
                {
                    direccion: 'Campus Tiquipaya C. Guillermina Martínez s/n, Tiquipaya',
                    telefono: 'Teléfono: 4318800 - 4150100',   
                    fax: 'Fax: 4315148 - 4315886'
                },
                {
                    direccion: 'Torre Académica América Av.América N° 165',
                    telefono: 'Teléfono: 4150300',
                    wss: 'Whatsap: +591 79962180'
                },
                {
                    direccion: 'EDIF. Polifuncional Univalle Av. Ayacucho N° 256',
                    telefono: 'Teléfono: 4150200',
                }
            ]           
        },
        {
            nombre: 'UNIFRANZ (Universidad Franz Tamayo)',
            info:[
                {
                    direccion:'Calle Portales N° 359 esq. Av. G. Villarroel',
                    telefono: 'Teléfono: 4798655',
                    fax: 'Fax: 4798655',
                    correo: 'Correo: unifranz@unifranz.edu.bo'
                }
            ]
        },
        {
            nombre: 'UNITEPC (Universidad Técnica Pv. Cosmos)',
            info: [
                {
                    direccion:'Campus Florida: Av. Blanco Galindo Km 7 1/2, Miguel Lanza esq. Daniel Campos Zona Florida Norte s/n',
                    telefono: 'Teléfono: 4374740',
                },
                {
                    direccion: 'Campus Colonial: Pasaje Fidelia Sánchez entre Heroínas y España',
                    telefono: 'Teléfono: 4250549',
                },
                {
                    direccion: 'Campus Juan Pablo: Av. Blanco Galindo s/n km. 4 1/2, entre Av. Cuarta y Carlos Araníbar',
                    telefono: 'Teléfono: 4283910',   
                }
            ]
        },
        {
            nombre: 'ULAT (Universidad Latinoamericana)',
            info: [
                {
                    direccion:'Uruguay #E-836, entre 16 de julio y Oquendo',
                    telefono: 'Teléfono: 4509488 - 4221004',
                    correo: 'Correo: latinoamericana@ulat.edu.bo'
                }
            ]
        },
        {
            nombre: 'Universidad Salesiana',
            info: [
                {
                    direccion:'Av. La Paz. B. Kami-Colcapirhua',
                    telefono: 'Teléfono: 4375671 – 4375674',
                    cel: 'Cel: +591 71565440',
                    correo: 'Correo: cochabamba@usalesiana.edu.bo'
                }
            ]

        },
        {
            nombre: 'UPAL (Universidad Privada Abierta Latinoamericana) ',
            info: [
                {
                    direccion:'Calle Túpac Amaru N#1816, esq. Paso del Inca-Z. Norte',
                    telefono: 'Teléfono: 4486100',
                    correo: 'Correo: upal@upal.edu'
                }
            ]
        },
        {
            nombre: 'ESFM (Escuela cuperior de formación de maestros)',
            info: [
                {
                    direccion:'Unidad Quillacollo: Zona Illataco – parada Trufi 211',
                    telefono: 'Teléfono: 4 4392460',
                    correo: 'Correo: esfm.simon.rodriguez.quillacollo@gmail.com'
                },
                {
                    direccion:'Unidad Cercado: C. Willam Shakespeare y Sofocles s/n, zona Alto Temporal',
                    telefono: 'Teléfono: 4457565',
                    correo: 'Correo: uacercado2023@gamil.com'
                },
                {
                    direccion:'Unidad Sacaba: Catachilla Baja Zona Villa Obrajes',
                    telefono: 'Teléfono: 4063959',
                    correo: 'Correo: ua_sacaba@gmail.com'
                },
                {
                    direccion:'Unidad Tarata: Av. Igualdad (frente a Instituto Agropecuario Tecnologico)',
                    telefono: 'Teléfono: 4578028',
                    correo: 'Correo: ua_tarata@gamil.com'
                },
                {
                    direccion:'Unidad Villa Tunari: Carretera a chipiriri km 6 1/2',
                    cel: 'Cel: 71108183',
                    correo: 'Correo: ua_vtunari@gmail.com',
                }
            ]
        },
        {
            nombre: 'Instituto Tecnológico Sayarinapaj',
            info: [
                {
                    direccion:'Bella Vista Km 8 camino a Liriuni-Quillacollo',
                    telefono: 'Teléfono: 436370 - 4567259',
                }
            ]
        }, 
        {
            nombre: 'Instituto Tecnológico Ivan Canelas ',
            info: [
                {
                    direccion: 'Z. Ancoraide altura hacienda Simón I. Patiño-Vinto',
                    cel: 'Cel: 69491663'
                }
            ]
        }
        
    ];

    return (
        <>
            <div className="contenedorU">
                <div className="encabezadoU">
                    <div className="imgUniversidades">
                        <img src={ImagenesApp.imgFondo} alt="Fondo" />
                    </div>
                </div>
                <div className='universidades'>
                    <h2 className='universidades'>¿Dónde puedo estudiar?</h2>
                    <p className='textoU'>A continuación te presentamos información de universidades e institutos (públicos y privados) de la región metropolitano de la Cochabamba:  
                    </p>
                </div>

                <div className="container-cardU">
                    {universidadesData.map((universidad, index) => (
                        <div className="cardU" key={index}>
                            <figure>
                                <img src={universidad.info[0].imgU} height="100px" width="80px" alt={universidad.nombre} />
                            </figure>
                            <div className="contenido-cardU">
                                <h3>{universidad.nombre}</h3>
                                {universidad.info.map((info, infoIndex) => (
                                    <div key={infoIndex}>
                                        <p>{info.direccion}</p>
                                        <p>{info.telefono}</p>
                                        {info.fax && <p>{info.fax}</p>}
                                        {info.correo && <p>{info.correo}</p>}
                                        {info.cel && <p>{info.cel}</p>}
                                        {info.wss && <p>{info.wss}</p>}
                                        {info.enlace && <a href={info.enlace}>Enlace</a>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Universidades;
