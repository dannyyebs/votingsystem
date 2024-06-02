const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      phonenumber: "0123456789",
      password: "o2JclQT1",
    }
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.update({
      where: {
        phonenumber: user.phonenumber,
      },
      data: {
        password: hashedPassword,
      },
    });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
