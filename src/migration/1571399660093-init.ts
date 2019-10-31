import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1571399660093 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
