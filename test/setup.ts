// ConfigModule validates as soon as AppModule is imported. Give tests safe
// placeholder values before that happens; unit tests do not connect to Postgres.
process.env.DATABASE_URL ??=
  'postgres://family_pot:family_pot@localhost:5432/family_pot_test';
process.env.JWT_ACCESS_SECRET ??= 'test-secret-that-is-at-least-32-characters';
