import type { User, UserDetails, UserRole } from '@prisma/client';

export type AppUser = User & { roles: UserRole[]; details: UserDetails };
