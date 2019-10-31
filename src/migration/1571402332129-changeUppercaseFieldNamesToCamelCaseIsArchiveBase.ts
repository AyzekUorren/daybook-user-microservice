import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeUppercaseFieldNamesToCamelCaseIsArchiveBase1571402332129
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "IsArchived" TO "isArchived"`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "isArchived" TO "IsArchived"`,
            undefined,
        );
    }
}
