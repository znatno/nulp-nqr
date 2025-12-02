/**
 * Test setup file
 * Runs before all tests
 */

import { PrismaClient } from '../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Set test environment
process.env.NODE_ENV = 'test';

// Initialize Prisma client for tests
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });

// Note: Cleanup is handled in individual test files or via globalTeardown
// to avoid Jest environment teardown conflicts
