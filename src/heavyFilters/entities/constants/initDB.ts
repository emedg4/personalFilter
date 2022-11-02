import { Datos } from "./datos"

export const STATUS: Array<string> = ["MetodoPago", "Tienda","MetodoEnvio","Cliente","Vitrina","EstatusPago",]

export const OPERADORES:Array<string> = ["Igual", "Distinto","Contiene","NoContiene"]

export const DATOS: Array<Datos> = [
{"value": "Pago en caja", "state": "MetodoPago" },{"value": "MercadoPago", "state": "MetodoPago" },{"value": "Expacio urbano La Reina", "state": "Tienda" },
{"value": "Portal La Reina", "state": "Tienda" },{"value": "Manquehue", "state": "Tienda" },{"value": "Bluex-Priority", "state": "MetodoEnvio" },
{"value": "Ivoy", "state": "MetodoEnvio" },{"value": "Fedex", "state": "MetodoEnvio" },{"value": "UPS", "state": "MetodoEnvio" },
{"value": "Shopify", "state": "Vitrina" },{"value": "Magento", "state": "Vitrina" },{"value": "VTEX", "state": "Vitrina" },
{"value": "ElasticPath", "state": "Vitrina" },{"value": "BigCommerce", "state": "Vitrina" },{"value": "CommerceTools", "state": "Vitrina" },
{"value": "Sin Pagar", "state": "EstatusPago" },{"value": "Pagado", "state": "EstatusPago" }]