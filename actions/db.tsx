'use server';
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

export const ADDMEE = async () => {
    const users = await prisma.member.create({
        data: {
            firstName: "Mohammad",
            middleName: "Dyaa Addin",
            lastName: "Shami",
            age: 24,
            currency: 'USDC',
            privateEmail: "deya.shami@icloud.com",
            mobileNumber: "+20 101 164 8463",
            sex: 'MALE',
            joinLLC: new Date,
            WorkEmail: "mohammad.shami@myva.cc",
            memberPic: "https://ik.imagekit.io/deyaxshami/Mohammad.jpg",
            address: {
                create: {
                    street: "Margueritenstrasse",
                    houseNumber: "9",
                    zipCode: "48527",
                    city: "Nordhorn",
                    governorate: "Lower Saxony",
                    country: "Germany",
                }
            },
            IDCard: {
                create: {
                    frontPicID: "https://ik.imagekit.io/deyaxshami/Front.png",
                    backPicID: "https://ik.imagekit.io/deyaxshami/Back.png",
                }
            },
            paymentMethod: {
                create: {
                    preferredPaymentMethod: "EYGPT_INSTAPAY",
                    relevantPaymentDetails: "01011648463"
                }
            }
        }
    })
};


