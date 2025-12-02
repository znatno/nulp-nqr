import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * GET /api/verify-certificate
 * Public endpoint to verify a certificate by certificate number
 * Query params:
 *   - certificateNumber (required): Certificate number (e.g., "CERT-123" or just "123")
 *   - holderName (optional): Full name of the certificate holder for additional verification
 *   - qualificationCode (optional): Qualification code for additional verification
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const certificateNumber = (req.query.certificateNumber as string)?.trim();
        const holderName = (req.query.holderName as string)?.trim();
        const qualificationCode = (req.query.qualificationCode as string)?.trim();

        // Validate required parameter
        if (!certificateNumber) {
            res.status(400).json({ error: 'certificateNumber is required' });
            return;
        }

        // Build where clause - search by certificateNumber directly
        const where: any = {
            certificateNumber: certificateNumber,
        };

        // Optional filters
        if (holderName) {
            where.fullName = { contains: holderName, mode: 'insensitive' as const };
        }

        // Find the professional (certificate holder)
        const professional = await prisma.professional.findFirst({
            where,
            include: {
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
                    },
                },
                professionalQualification: {
                    include: {
                        profession: {
                            select: {
                                id: true,
                                name: true,
                                code: true,
                            },
                        },
                    },
                },
            },
        });

        // If qualificationCode was provided, verify it matches
        if (professional && qualificationCode) {
            const professionCode = professional.professionalQualification.profession?.code;
            if (professionCode && professionCode.toLowerCase() !== qualificationCode.toLowerCase()) {
                // Certificate exists but qualification code doesn't match
                res.status(200).json({
                    found: false,
                    message: 'Certificate not found or qualification code does not match',
                });
                return;
            }
        }

        if (!professional) {
            res.status(200).json({
                found: false,
                message: 'Certificate not found',
            });
            return;
        }

        // Calculate validity status
        // For now, all certificates are considered valid (no expiry logic yet)
        // You can extend this later with expiry dates or revocation logic
        const validity = 'VALID'; // Could be 'VALID' | 'EXPIRED' | 'REVOKED'
        const status = 'valid'; // Lowercase for consistency with applicant route

        // Format response
        const response = {
            found: true,
            certificateNumber: professional.certificateNumber,
            validity,
            status,
            holder: {
                fullName: professional.fullName,
            },
            qualification: {
                id: professional.professionalQualification.id,
                name: professional.professionalQualification.name,
                nqrLevel: professional.professionalQualification.nqrLevel,
                profession: professional.professionalQualification.profession
                    ? {
                          id: professional.professionalQualification.profession.id,
                          name: professional.professionalQualification.profession.name,
                          code: professional.professionalQualification.profession.code,
                      }
                    : null,
            },
            centre: {
                id: professional.qualificationCenter.id,
                name: professional.qualificationCenter.name,
                edrpou: professional.qualificationCenter.edrpou,
                address: professional.qualificationCenter.address,
            },
            issueDate: professional.certificateReceivedAt.toISOString(),
            expiryDate: null, // Add if you have expiry logic
        };

        res.json(response);
    } catch (err) {
        console.error('Failed to verify certificate', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
