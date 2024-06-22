// test.spec.ts
import { describe, beforeAll, afterAll, expect, it } from 'vitest';
import { Mongoose } from 'mongoose';
import { initializeDB } from '../../src/Database/database';

describe('Test: Base de Datos', () => {
  let db: Mongoose | null;

  beforeAll(async () => {
    db = await initializeDB();
  });

  afterAll(async () => {
    if (db) {
      await db.disconnect();
    }
  });

  it('La conexión a MongoDB se realiza correctamente', () => {
    expect(db).toBeDefined();
  });
});
