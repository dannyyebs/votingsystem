const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const users = [
    { phonenumber: '1234567890', password: 'password1' },
    { phonenumber: '0987654321', password: 'password2' },
    // Add 8 more users with different phone numbers and passwords
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        phonenumber: user.phonenumber,
        password: hashedPassword,
      },
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });