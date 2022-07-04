import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
  const reqOptions = {
    url: 'https://unpkg.com/codes-postaux@3.6.0/codes-postaux.json',
    method: 'GET',
  };

  const res = await axios.request(reqOptions);

  await prisma.city.createMany({ data: res.data, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
