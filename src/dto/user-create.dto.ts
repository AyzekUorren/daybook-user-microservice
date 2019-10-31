export class UserCreateDto {
    createdAt: Date;

    updatedAt: Date;

    readonly firstName: string;

    readonly middleName: string;

    readonly lastName: string;

    readonly password: string;

    readonly email: string;

    readonly age: Date;
}
