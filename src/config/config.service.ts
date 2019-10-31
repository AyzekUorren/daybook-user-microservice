import { User } from '../model/user.entity';
import { Logger, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.GetConfigValue(k, true));
    }

    constructor(filePath: string) {
        if (filePath && !String(filePath).includes('undefined')) {
            try {
                this.envConfig = dotenv.parse(fs.readFileSync(filePath));
            } catch (error) {
                this.envConfig = {};
            }
        } else if (
            !String(filePath).includes('undefined') &&
            Boolean(this.get('GENERATE_MIGRATION'))
        ) {
            try {
                this.envConfig = dotenv.parse(fs.readFileSync(filePath));
            } catch (error) {
                const errorMessage = `Error -> ${this.get(
                    'NODE_ENV',
                )}.env file not found`;
                Logger.error(errorMessage);
                throw new Error(errorMessage);
            }
        }

        const ensureValuesEnv = [
            'DATABASE_HOST_NAME',
            'DATABASE_PORT',
            'DATABASE_USER_NAME',
            'DATABASE_USER_PASSWORD',
            'DATABASE_NAME',
        ];

        if (this.IsProduction()) {
            ensureValuesEnv.push('HTTPS');
            ensureValuesEnv.push('DATABASE_SYNCHHRONIZE');
        }

        this.ensureValues(ensureValuesEnv);
    }

    get(key: string): string {
        const envValue = this.GetConfigValue(key);
        return envValue;
    }

    public IsProduction(): boolean {
        return this.get('NODE_ENV') === 'production';
    }

    public GetPostgresTypeOrmConfig(): PostgresConnectionOptions {
        return {
            type: 'postgres',
            host: this.get('DATABASE_HOST_NAME'),
            port: Number(this.get('DATABASE_PORT')),
            username: this.get('DATABASE_USER_NAME'),
            password: this.get('DATABASE_USER_PASSWORD'),
            database: this.get('DATABASE_NAME'),
            entities: [User],
            migrationsTableName: 'migration',
            migrations: [
                `./${this.IsProduction() ? 'dist' : 'src'}/migration/${
                    this.IsProduction() ? '*.js' : '*.ts'
                }`,
            ],
            cli: {
                migrationsDir: `./${
                    this.IsProduction() ? 'dist' : 'src'
                }/migration`,
            },
            ssl: false,
            synchronize: ConfigService.isTrue(
                this.get('DATABASE_SYNCHHRONIZE'),
            ),
            migrationsRun: ConfigService.isTrue(this.get('RUN_MIGRATIONS')),
            logging: this.IsProduction(),
            logger: 'debug',
        };
    }

    protected GetConfigValue(key: string, throwOnMissing = false): string {
        Logger.debug(`GET -> ${key}`);
        if (process.env && process.env[key]) {
            return process.env[key];
        } else if (this.envConfig && this.envConfig[key]) {
            return this.envConfig[key];
        }

        if (throwOnMissing) {
            throw new Error(`config error -> missing ${key}`);
        } else {
            return '';
        }
    }

    private static isTrue(envValue: string): boolean {
        return envValue === 'true';
    }
}
