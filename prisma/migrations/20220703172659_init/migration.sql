-- CreateTable
CREATE TABLE "City" (
    "codePostal" TEXT NOT NULL,
    "codeCommune" TEXT NOT NULL,
    "nomCommune" TEXT NOT NULL,
    "libelleAcheminement" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("codePostal")
);
