import {EmployeeDto} from './employee-dto';

export class EmployeeUtil {

    private constructor() {
    }

    public static getAllEmployeeNames(): string[] {
        return this.getAllEmployees()
            .map(employee => employee.name);
    }

    public static findById(id: number): EmployeeDto {
        let employee = this
            .getAllEmployees()
            .find((employee) => employee.id == id);

        if (!employee) {
            throw new Error(`Employee with id ${id} not found.`);
        }

        return employee;
    }

    private static getAllEmployees(): EmployeeDto[] {
        return [
            {
                id: 1,
                name: 'Marcelo Santos',
                cpf: '123.456.789-00',
                birthday: new Date('1985-04-12'),
                responsibility: 'Veterinário'
            },
            {
                id: 2,
                name: 'Fernanda Lima',
                cpf: '234.567.890-01',
                birthday: new Date('1990-08-23'),
                responsibility: 'Atendente'
            },
            {
                id: 3,
                name: 'Carlos Alberto',
                cpf: '345.678.901-02',
                birthday: new Date('1982-02-15'),
                responsibility: 'Gerente'
            },
            {
                id: 4,
                name: 'Beatriz Oliveira',
                cpf: '456.789.012-03',
                birthday: new Date('1995-06-30'),
                responsibility: 'Veterinário'
            },
            {
                id: 5,
                name: 'Rafael Silva',
                cpf: '567.890.123-04',
                birthday: new Date('1987-11-22'),
                responsibility: 'Recepcionista'
            },
            {
                id: 6,
                name: 'Patrícia Gomes',
                cpf: '678.901.234-05',
                birthday: new Date('1992-05-12'),
                responsibility: 'Auxiliar Administrativo'
            }
        ]
    }
}
