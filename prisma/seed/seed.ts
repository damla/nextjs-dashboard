import { createId } from '@paralleldrive/cuid2';
import { Status } from '@prisma/client';
import { createSeedClient } from '@snaplet/seed';

const main = async () => {
  const seed = await createSeedClient();

  console.info('🌱 Start seeding...');
  await seed.user((createMany) =>
    createMany(10, {
      id: () => createId(),
      username: () => `user_${Math.random().toString(36).substring(7)}`,
      email: () => `user_${Math.random().toString(36).substring(7)}@example.com`,
      payments: (createMany) =>
        createMany(10, {
          id: () => createId(),
          amount: () => `${Math.floor(Math.random() * 1000) + 100}`,
          status: () =>
            [Status.PENDING, Status.PROCESSING, Status.SUCCESS, Status.FAILED][
              Math.floor(Math.random() * 4)
            ]
        })
    })
  );

  console.info('✅ Database seeded successfully!');

  process.exit();
};

main();
