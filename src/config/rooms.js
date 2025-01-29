// src/config/rooms.js
export const ROOM_TYPES = {
    COLONIAL_SUITE: {
      id: 'colonial-suite',
      name: 'Suite Getsemaní',
      price: 299,
      capacity: 4,
      description: 'Elegante suite con vista a la ciudad amurallada, capturando la esencia colonial de Cartagena de Indias con comodidades modernas y lujo tradicional.',
      location: 'Proyecto El Socorro',
      amenities: [
        'Cama King Size',
        'Baño privado con ducha de lluvia',
        'Smart TV 55"',
        'Aire acondicionado',
        'WiFi de alta velocidad',
        'Minibar premium',
        'Caja fuerte digital',
        'Servicio a la habitación 24/7'
      ]
    },
    // Proyecto Zaragocilla (deshabilitado)
    ZARAGOCILLA: {
      id: 'zaragocilla',
      name: 'Proyecto Zaragocilla',
      enabled: false,
      comingSoon: true
    }
  };
  
  export const ACTIVE_PROJECTS = {
    EL_SOCORRO: {
      id: 'el-socorro',
      name: 'Proyecto El Socorro',
      enabled: true,
      roomType: ROOM_TYPES.COLONIAL_SUITE
    },
    ZARAGOCILLA: {
      id: 'zaragocilla',
      name: 'Proyecto Zaragocilla',
      enabled: false,
      comingSoon: true
    }
  };