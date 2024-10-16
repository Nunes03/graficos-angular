import {CustomerDto} from './customer-dto';

export class CustomerUtils {

    private constructor() {
    }

    public static findById(id: number): CustomerDto {
        let customer = this
            .getAllCustomer()
            .find((customer) => customer.id == id);

        if (!customer) {
            throw new Error(`Customer with id ${id} not found.`);
        }

        return customer;
    }

    private static getAllCustomer(): CustomerDto[] {
        return [
            {
                id: 1,
                name: 'João Silva',
                birthday: new Date('1985-01-12'),
                cpf: '123.456.789-01'
            },
            {
                id: 2,
                name: 'Maria Oliveira',
                birthday: new Date('1990-05-23'),
                cpf: '234.567.890-12'
            },
            {
                id: 3,
                name: 'Carlos Pereira',
                birthday: new Date('1987-11-03'),
                cpf: '345.678.901-23'
            },
            {
                id: 4,
                name: 'Ana Costa',
                birthday: new Date('1992-03-14'),
                cpf: '456.789.012-34'
            },
            {
                id: 5,
                name: 'Pedro Souza',
                birthday: new Date('1980-07-07'),
                cpf: '567.890.123-45'
            },
            {
                id: 6,
                name: 'Julia Martins',
                birthday: new Date('1995-09-21'),
                cpf: '678.901.234-56'
            },
            {
                id: 7,
                name: 'Lucas Fernandes',
                birthday: new Date('1982-12-12'),
                cpf: '789.012.345-67'
            },
            {
                id: 8,
                name: 'Clara Almeida',
                birthday: new Date('1989-02-02'),
                cpf: '890.123.456-78'
            },
            {
                id: 9,
                name: 'Rafael Lima',
                birthday: new Date('1986-06-17'),
                cpf: '901.234.567-89'
            },
            {
                id: 10,
                name: 'Sofia Ramos',
                birthday: new Date('1994-08-25'),
                cpf: '012.345.678-90'
            },
            {
                id: 11,
                name: 'Thiago Barbosa',
                birthday: new Date('1988-10-10'),
                cpf: '123.456.789-02'
            },
            {
                id: 12,
                name: 'Fernanda Rocha',
                birthday: new Date('1991-04-04'),
                cpf: '234.567.890-13'
            },
            {
                id: 13,
                name: 'Rodrigo Teixeira',
                birthday: new Date('1984-09-19'),
                cpf: '345.678.901-24'
            },
            {
                id: 14,
                name: 'Gabriela Moraes',
                birthday: new Date('1993-06-11'),
                cpf: '456.789.012-35'
            },
            {
                id: 15,
                name: 'Bruno Cardoso',
                birthday: new Date('1996-12-27'),
                cpf: '567.890.123-46'
            },
            {
                id: 16,
                name: 'Camila Duarte',
                birthday: new Date('1981-05-18'),
                cpf: '678.901.234-57'
            },
            {
                id: 17,
                name: 'Gustavo Nunes',
                birthday: new Date('1983-07-24'),
                cpf: '789.012.345-68'
            },
            {
                id: 18,
                name: 'Beatriz Vieira',
                birthday: new Date('1997-01-09'),
                cpf: '890.123.456-79'
            },
            {
                id: 19,
                name: 'Diego Santana',
                birthday: new Date('1985-11-30'),
                cpf: '901.234.567-80'
            },
            {
                id: 20,
                name: 'Renata Mendes',
                birthday: new Date('1998-04-16'),
                cpf: '012.345.678-91'
            }
        ]
    }
}
