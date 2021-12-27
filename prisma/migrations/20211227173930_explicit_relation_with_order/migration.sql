/*
  Warnings:

  - You are about to drop the `_PersonToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `_PersonToTeam`;

-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `teamId` INTEGER NOT NULL,
    `personId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
