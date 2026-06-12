import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { createRequire } from 'module';

// 1. EL TRUCO DEL MILLÓN: 
// Forzamos a Vitest a usar el mismo sistema de memoria que tu backend
const require = createRequire(import.meta.url);

// 2. Apagamos la base de datos interceptando el archivo de configuración
vi.mock('../config/database', () => {
  const mockDB = {
    sync: vi.fn().mockResolvedValue(true),
    define: vi.fn().mockReturnValue({})
  };
  return { default: mockDB, ...mockDB };
});

// 3. IMPORTAMOS USANDO REQUIRE (no import). 
// ¡Esto garantiza que atrapamos la misma instancia exacta que usa tu controlador!
const donacionRepository = require('../repositories/donacionRepository');
const app = require('../app');

describe('Microservicio - API de Donaciones (Bitcoin Edition)', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  /* --- RUTAS FELICES --- */

  it('GET / - Debe devolver la lista de donaciones', async () => {
    // Al estar en el mismo universo, este espía es 100% infalible
    vi.spyOn(donacionRepository, 'obtenerTodas').mockResolvedValue([
      { id: 1, recurso: 'Mantas', cantidad: 20 },
      { id: 2, recurso: 'Alimentos', cantidad: 50 }
    ]);

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data[0].recurso).toBe('Mantas');
  });

  it('POST / - Debe crear una donación exitosamente', async () => {
    vi.spyOn(donacionRepository, 'crear').mockResolvedValue({ id: 3, recurso: 'Agua', cantidad: 10 });

    const response = await request(app)
      .post('/')
      .send({ recurso: 'Agua', cantidad: 10, nombreDonante: 'Luis' });

    expect(response.status).toBe(201);
    expect(response.body.status).toBe('success');
    expect(response.body.data.recurso).toBe('Agua');
  });

  /* --- RUTAS TRISTES --- */

  it('POST / - Debe rechazar la creación si falla la validación', async () => {
    vi.spyOn(donacionRepository, 'crear').mockRejectedValue(new Error('Faltan datos'));

    const response = await request(app)
      .post('/')
      .send({ cantidad: 10 });

    expect(response.status).toBe(500);
    expect(response.body.status).toBe('error');
  });

  it('GET / - Debe manejar fallos internos de la base de datos', async () => {
    vi.spyOn(donacionRepository, 'obtenerTodas').mockRejectedValue(new Error('DB timeout'));

    const response = await request(app).get('/');

    expect(response.status).toBe(500);
    expect(response.body.status).toBe('error');
  });

});