import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDatabase1712133869212 implements MigrationInterface {
    name = 'InitialDatabase1712133869212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_settings" ("userId" integer NOT NULL, "receiveNotifications" boolean NOT NULL DEFAULT false, "receiveEmails" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_986a2b6d3c05eb4091bb8066f78" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "displayName" character varying, "settingsUserId" integer, CONSTRAINT "REL_79dbb1fba3d3b8c9e5c960702c" UNIQUE ("settingsUserId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_79dbb1fba3d3b8c9e5c960702ca" FOREIGN KEY ("settingsUserId") REFERENCES "user_settings"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_79dbb1fba3d3b8c9e5c960702ca"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_settings"`);
    }

}
