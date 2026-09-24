export const mockClients = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    phone: '+51 987 654 321',
    lastVisit: '2026-09-21',
    visits: 24,
    totalSpent: 1450.00,
    favoriteBarber: 'Miguel A.',
    status: 'Frecuente', // Frecuente, Nuevo, VIP, Inactivo
    registrationDate: '2025-01-15',
    avgTicket: 60.4,
    styleProfile: {
      haircut: 'Low Fade / Texturizado',
      fadeType: 'Low',
      topLength: '5 cm',
      beardStyle: 'Corta perfilada',
      frequency: 'Cada 15 días',
      preferences: 'No le gusta usar cera brillante, prefiere polvos texturizadores.',
      notes: 'Cuero cabelludo sensible. Usar navaja con mucho cuidado en el cuello.'
    },
    visualHistory: [
      { id: 101, date: '2026-09-21', service: 'Corte + Barba', barber: 'Miguel A.', imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=200&h=200&auto=format&fit=crop', notes: 'Mismo estilo de siempre. Se rebajó un poco más la barba.' },
      { id: 102, date: '2026-09-05', service: 'Corte Clásico', barber: 'Miguel A.', imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=200&h=200&auto=format&fit=crop', notes: 'Fade ligeramente más alto hoy.' }
    ],
    serviceHistory: [
      { id: 201, date: '2026-09-21', service: 'Corte + Barba', barber: 'Miguel A.', price: 65, payment: 'Tarjeta' },
      { id: 202, date: '2026-09-05', service: 'Corte Clásico', barber: 'Miguel A.', price: 45, payment: 'Efectivo' },
      { id: 203, date: '2026-08-20', service: 'Corte + Barba + Cejas', barber: 'Miguel A.', price: 75, payment: 'Tarjeta' },
    ],
    loyalty: {
      points: 450,
      level: 'Oro',
      membership: 'Premium Mensual',
      benefits: ['Bebida de cortesía', 'Prioridad en reservas', '10% dcto en productos']
    }
  },
  {
    id: 2,
    name: 'Luis Torres',
    phone: '+51 912 345 678',
    lastVisit: '2026-09-23',
    visits: 2,
    totalSpent: 90.00,
    favoriteBarber: 'Juan P.',
    status: 'Nuevo',
    registrationDate: '2026-08-28',
    avgTicket: 45.0,
    styleProfile: {
      haircut: 'Corte Clásico a tijera',
      fadeType: 'Ninguno',
      topLength: 'Largo',
      beardStyle: 'Sin barba',
      frequency: 'Cada mes',
      preferences: 'Peinado de lado clásico.',
      notes: 'Primera visita le gustó mucho. Preguntó por productos anticaída.'
    },
    visualHistory: [],
    serviceHistory: [
      { id: 204, date: '2026-09-23', service: 'Corte Clásico', barber: 'Juan P.', price: 45, payment: 'Yape' },
      { id: 205, date: '2026-08-28', service: 'Corte Clásico', barber: 'Juan P.', price: 45, payment: 'Efectivo' }
    ],
    loyalty: {
      points: 90,
      level: 'Bronce',
      membership: 'Ninguna',
      benefits: ['Bebida estándar']
    }
  },
  {
    id: 3,
    name: 'Roberto Gómez',
    phone: '+51 998 877 665',
    lastVisit: '2026-07-10',
    visits: 48,
    totalSpent: 3500.00,
    favoriteBarber: 'Miguel A.',
    status: 'VIP',
    registrationDate: '2023-11-05',
    avgTicket: 72.9,
    styleProfile: {
      haircut: 'Skin Fade Alto',
      fadeType: 'High / Skin',
      topLength: 'Corto (Máquina 3)',
      beardStyle: 'Larga y cuadrada',
      frequency: 'Cada semana',
      preferences: 'Le gusta conversar mucho. Toma whisky.',
      notes: 'Cliente muy exigente con el perfilado de la barba.'
    },
    visualHistory: [
      { id: 103, date: '2026-07-10', service: 'Paquete VIP', barber: 'Miguel A.', imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=200&h=200&auto=format&fit=crop', notes: 'Perfilado de barba y facial.' }
    ],
    serviceHistory: [
      { id: 206, date: '2026-07-10', service: 'Paquete VIP', barber: 'Miguel A.', price: 120, payment: 'Tarjeta' }
    ],
    loyalty: {
      points: 3500,
      level: 'Black',
      membership: 'Suscripción Black',
      benefits: ['Whisky Blue Label', 'Servicio a domicilio', 'Lavado Spa siempre']
    }
  }
];
