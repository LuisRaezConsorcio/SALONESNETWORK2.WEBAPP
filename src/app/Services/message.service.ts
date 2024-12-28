import { Injectable } from '@angular/core';
import { Pais, Post, Seccion, Subseccion } from '../Interfaces/Post.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  posts: Post[] = [

    {
      "id": 1,
      "name": "Agronomía y Proyectos Industriales",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "AIRES ACONDICIONADOS",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Analisis de Produccion y Direfencias",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "APUESTAS DEPORTIVAS Y LOTERIAS",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "name": "Arrendamientos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "name": "Atencion Alertas Alert View",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "name": "Auditorias",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "Avance de Obra",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 9,
      "name": "Billeteros",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 10,
      "name": "CCTV",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "CNT",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "Codigos Gerente de Operaciones",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 13,
      "name": "Control de clear",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 14,
      "name": "Convenciones",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 15,
      "name": "Ctas Ctes Proveedor MT",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 16,
      "name": "Cuadre de Gastos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 17,
      "name": "CUADRE DIARIO - SALAS",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 18,
      "name": "Cuentas Corrientes",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 19,
      "name": "Decoraciones",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 20,
      "name": "DEUDAS POR COBRAR",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 21,
      "name": "Documentos de reapertura Fase 4",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 22,
      "name": "Documentos de Salas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 23,
      "name": "Faltantes",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 24,
      "name": "Finanzas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 25,
      "name": "Fotos o Videos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 26,
      "name": "INDECI",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 27,
      "name": "Informes Clientes Incognitos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 28,
      "name": "Informes Ejecutivos - Funcionarios",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 29,
      "name": "INLOG - Salas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 30,
      "name": "Inspectoría",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 31,
      "name": "Inventarios",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 32,
      "name": "Juridicos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 33,
      "name": "ALicencias y Contratos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 34,
      "name": "Logistica",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 35,
      "name": "M.A.",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 36,
      "name": "MAQUINAS DE PRODUCCION MINERA",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 37,
      "name": "Maquinas Inoperativas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 38,
      "name": "Maquinas Off Line",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 39,
      "name": "Marketing",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 40,
      "name": "Mejores Clientes",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 41,
      "name": "Minería",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 42,
      "name": "MMT/AMT",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 43,
      "name": "Negociaciones Locales",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 44,
      "name": "OCUPABILIDAD (Graficas y Estadísticas)",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 45,
      "name": "OFC",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 46,
      "name": "Ordenes de Compras y Contratos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 47,
      "name": "Organización y Métodos / Capacitaciones",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 48,
      "name": "P.A.",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 49,
      "name": "Partidas Registrales",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 50,
      "name": "PGL",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 51,
      "name": "Planes Gerenciales",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 52,
      "name": "Presupuestos de Salas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 53,
      "name": "Procedimientos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 54,
      "name": "Procesos Judiciales y Administrativos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 55,
      "name": "Produccion",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 56,
      "name": "Produccion Textil",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 57,
      "name": "Protocolo de Salas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 58,
      "name": "PROVEEDORES",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 59,
      "name": "Proveedores Maq Tragamodenas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 60,
      "name": "Proveedores MT en participacion",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 61,
      "name": "R. D. AUTORITATIVAS",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 62,
      "name": "R.D. Salas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 63,
      "name": "R.J.I.",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 64,
      "name": "Recursos Humanos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 65,
      "name": "Renovación de autorización en el Sistema integral de Casinos",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 66,
      "name": "RETEC",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 67,
      "name": "Reuniones y Negociaciones",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 68,
      "name": "S.O.P.",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 69,
      "name": "ASAG",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 70,
      "name": "SAG Chequeras",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 71,
      "name": "Seccion Erronea",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 72,
      "name": "Seguros y Coberturas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 73,
      "name": "Siniestros y Reclamos de Seguros",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 74,
      "name": "Sistemas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 75,
      "name": "ASTARLIGJT",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 76,
      "name": "TERMOPLANOS",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 77,
      "name": "TRAMAS SUCTR",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 78,
      "name": "Transportes",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 79,
      "name": "Ventas",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 80,
      "name": "Villas de Bougancille ICA",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    },
    {
      "id": 81,
      "name": "Villas de Bouganville REQUE",
      "pais": [
        {
          "id": 1,
          "name": "Chile",
          "seccion": [
            {
              "id": 1,
              "name": "Quinoa - Chile",
              "subseccion": [
                {
                  "id": 1,
                  "name": "Comunicaciones Generales"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Nicaragua",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area Gerencia General",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Inspectoria 1",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Marketing",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Operaciones",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area RR. HH.",
              "subseccion": []
            }
          ]
        },
        {
          "id": 3,
          "name": "Paraguay",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 4,
          "name": "Peru",
          "seccion": [
            {
              "id": 1,
              "name": "..General",
              "subseccion": []
            },
            {
              "id": 2,
              "name": ".Area A & B",
              "subseccion": []
            },
            {
              "id": 3,
              "name": ".Area Almacen",
              "subseccion": []
            },
            {
              "id": 4,
              "name": ".Area Analisis de Produccion",
              "subseccion": []
            },
            {
              "id": 5,
              "name": ".Area Auditoria Interna",
              "subseccion": []
            },
            {
              "id": 6,
              "name": ".Area COMEX",
              "subseccion": []
            },
            {
              "id": 7,
              "name": ".Area Contabilidad",
              "subseccion": []
            },
            {
              "id": 8,
              "name": ".Area Decoraciones",
              "subseccion": []
            },
            {
              "id": 9,
              "name": ".Area Finanzas",
              "subseccion": []
            },
            {
              "id": 10,
              "name": ".Area Gerencia General",
              "subseccion": []
            }
          ]
        },
        {
          "id": 5,
          "name": "Venezuela",
          "seccion": [
            {
              "id": 1,
              "name": "QUINUA - Venezuela",
              "subseccion": []
            }
          ]
        }
      ]
    }
  ]

  //para Noticias
  private postSubject = new BehaviorSubject<Post[]>(this.posts); // Inicializa con un array vacío
  post$ = this.postSubject.asObservable(); // Exponemos el observable
  
  getPosts(): Observable<Post[]> {
    return this.post$; // Retorna el observable
  }

  constructor() { }

  //para paises
  private selectedPostIdSubject = new BehaviorSubject<number | null>(null);
  selectedPostId$ = this.selectedPostIdSubject.asObservable();

  setSelectedPostId(postId: number): void {
    this.selectedPostIdSubject.next(postId);
  }

  getPostById(postId: number): Post | undefined {

    return this.posts.find((post) => post.id === postId);
  }





  private selectedDataSubject = new BehaviorSubject<{ postId: number; paisId: number } | null>(null);
  selectedData$ = this.selectedDataSubject.asObservable();

  setSelectedData(postId: number, paisId: number): void {
    console.log('post: '+postId, 'pais: '+ paisId)
    this.selectedDataSubject.next({ postId, paisId });
  }

  // Obtener un país por su ID
  getPaisById(postId: number, paisId: number): Pais | undefined {
    const post = this.posts.find((p) => p.id === postId);
    return post ? post.pais.find((pais) => pais.id === paisId) : undefined;
  }




  // Obtener una sección específica por IDs de post, país y sección
  getSeccionById(postId: number, paisId: number, seccionId: number): Seccion | null {
    const pais = this.getPaisById(postId, paisId);
    return pais ? pais.seccion.find((seccion) => seccion.id === seccionId) || null : null;
  }

  // Obtener una subsección específica por IDs de post, país, sección y subsección
  getSubseccionById(postId: number, paisId: number, seccionId: number, subseccionId: number): Subseccion | null {
    const seccion = this.getSeccionById(postId, paisId, seccionId);
    return seccion ? seccion.subseccion.find((subseccion) => subseccion.id === subseccionId) || null : null;
  }


}
