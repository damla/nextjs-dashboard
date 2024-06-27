import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    id: 'clmet0gwtest618mi9vo446pt',
    username: 'damla',
    email: 'damla@test.com'
  },
  {
    id: 'clmet0gwtest008mi9vo446pt',
    username: 'testUser',
    email: 'user@test2.com'
  }
];

async function main() {
  console.info('🏁 Start seeding ...');
  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { id: u.id },
      update: {},
      create: {
        ...u
      }
    });
    console.info(`✅ Created user with id: ${user.id}`);
  }

  const payment = await prisma.payment.upsert({
    where: { id: 'clmet0gwtest008mi9vo446pt' },
    update: {},
    create: {
      id: 'clmet0gwtest008mi9vo446pt',
      amount: '100',
      status: Status.PENDING,
      user: {
        connect: {
          id: 'clmet0gwtest618mi9vo446pt'
        }
      }
    }
  });

  console.info('✅ Created payment:', payment);

  console.info('🌱 Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('🥲 An error occured. Error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
