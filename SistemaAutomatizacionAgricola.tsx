'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DrillIcon as Drone, Droplet, Leaf, BarChart, Zap, Sprout } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const features = [
  { 
    icon: Drone, 
    title: "Monitoreo con Drones", 
    description: "Vigilancia aérea para una visión completa de tus cultivos",
    activities: [
      "Planificación de vuelos de drones",
      "Captura de imágenes multiespectrales",
      "Procesamiento de datos de vuelo"
    ],
    deliverables: [
      "Mapas de índice de vegetación",
      "Informes de salud de cultivos",
      "Identificación de áreas problemáticas"
    ]
  },
  { 
    icon: Droplet, 
    title: "Gestión del Riego", 
    description: "Optimización del uso del agua basada en datos en tiempo real",
    activities: [
      "Monitoreo de humedad del suelo",
      "Análisis de patrones climáticos",
      "Programación de riego automatizado"
    ],
    deliverables: [
      "Planes de riego personalizados",
      "Alertas de estrés hídrico",
      "Informes de ahorro de agua"
    ]
  },
  { 
    icon: Leaf, 
    title: "Control de Fertilizantes", 
    description: "Aplicación precisa de nutrientes según las necesidades del cultivo",
    activities: [
      "Análisis de suelos",
      "Monitoreo de nutrientes en plantas",
      "Cálculo de dosis de fertilizantes"
    ],
    deliverables: [
      "Planes de fertilización específicos",
      "Mapas de aplicación variable",
      "Informes de eficiencia de nutrientes"
    ]
  },
  { 
    icon: BarChart, 
    title: "Análisis de Datos", 
    description: "Insights actionables para mejorar la productividad",
    activities: [
      "Recopilación de datos de múltiples fuentes",
      "Procesamiento con algoritmos de IA",
      "Generación de informes personalizados"
    ],
    deliverables: [
      "Dashboards interactivos",
      "Predicciones de rendimiento",
      "Recomendaciones de optimización"
    ]
  },
  { 
    icon: Zap, 
    title: "Alertas en Tiempo Real", 
    description: "Notificaciones inmediatas sobre condiciones críticas",
    activities: [
      "Monitoreo continuo de condiciones",
      "Detección de anomalías",
      "Envío de notificaciones push"
    ],
    deliverables: [
      "Sistema de alertas personalizables",
      "Registro de incidencias",
      "Protocolos de acción rápida"
    ]
  },
  { 
    icon: Sprout, 
    title: "Planificación de Cultivos", 
    description: "Recomendaciones para la rotación y manejo de cultivos",
    activities: [
      "Análisis de historial de cultivos",
      "Evaluación de condiciones del suelo",
      "Modelado de escenarios de cultivo"
    ],
    deliverables: [
      "Planes de rotación de cultivos",
      "Calendarios de siembra optimizados",
      "Estrategias de manejo integrado"
    ]
  },
]

export default function SistemaAutomatizacionAgricola() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <motion.header 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold mb-4 text-green-800">Sistema de Automatización para la Agricultura de Precisión</h1>
          <p className="text-xl text-green-700">
            Optimiza tus cultivos con drones y sensores IoT para una agricultura más eficiente y sostenible
          </p>
        </motion.header>

        <motion.section 
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-semibold mb-8 text-green-800 text-center">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card 
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer bg-white shadow-lg hover:shadow-xl"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-700">
                          <motion.div
                            animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-green-100 p-2 rounded-full mr-3"
                          >
                            <feature.icon className="h-6 w-6 text-green-600" />
                          </motion.div>
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-green-50">
                    <DialogHeader>
                      <DialogTitle className="text-green-800">{feature.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-green-700">Actividades:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-green-600">
                          {feature.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-green-700">Entregables:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-green-600">
                          {feature.deliverables.map((deliverable, idx) => (
                            <li key={idx}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-20 bg-white rounded-lg shadow-lg p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-800 text-center">Beneficios</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Aumento de la productividad agrícola",
              "Reducción en el uso de agua y fertilizantes",
              "Detección temprana de plagas y enfermedades",
              "Mejora en la calidad de los cultivos",
              "Toma de decisiones basada en datos precisos",
              "Contribución a la agricultura sostenible"
            ].map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-green-700"
              >
                <Sprout className="h-5 w-5 mr-2 text-green-500" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold mb-8 text-green-800 text-center">Cómo Funciona</h2>
          <ol className="space-y-6">
            {[
              { title: "Recolección de Datos", description: "Los drones sobrevuelan los campos y los sensores IoT recopilan información sobre el suelo, el clima y el estado de los cultivos." },
              { title: "Análisis en Tiempo Real", description: "Nuestro sistema procesa los datos recolectados utilizando algoritmos avanzados de inteligencia artificial." },
              { title: "Generación de Insights", description: "Se crean informes detallados y recomendaciones específicas para cada área del campo." },
              { title: "Acciones Automatizadas", description: "El sistema puede ajustar automáticamente el riego, la fertilización y otros parámetros según sea necesario." },
              { title: "Monitoreo Continuo", description: "Los agricultores pueden acceder a la información y controlar sus campos en cualquier momento a través de una aplicación móvil o plataforma web." }
            ].map((step, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-green-700">{step.title}</h3>
                <p className="text-green-600">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        <motion.section 
          className="text-center bg-white rounded-lg shadow-lg p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-800">¿Listo para revolucionar tu agricultura?</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white">
              Solicita una Demostración
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}