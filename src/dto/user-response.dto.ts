import { AbstractResponseDto } from '../utils/dto/abstract-response.dto';

export class UserResponseDto extends AbstractResponseDto {
    private AllowFields: string[] = ['icon', 'id', 'createdAt', 'updatedAt', 'firstName', 'middleName', 'lastName', 'email', 'age'];

    readonly id: string;

    readonly icon: string;

    readonly createdAt: string;

    readonly updatedAt: string;

    readonly firstName: string;

    readonly middleName: string;

    readonly lastName: string;

    readonly email: string;

    readonly age: string;

    constructor(data: any) {
        super();
        AbstractResponseDto.SetValueIfExists(this, data, this.AllowFields);
    }
}
