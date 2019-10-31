import { MigrationInterface, QueryRunner } from 'typeorm';

export class passwordNotUnique1571400589081 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "UQ_cc070ccb9a44c11277734b88911"`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "UQ_cc070ccb9a44c11277734b88911" UNIQUE ("Password")`,
            undefined,
        );
    }
}
