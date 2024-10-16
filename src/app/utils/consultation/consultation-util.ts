import {ConsultationDto} from './consultation-dto';
import {EmployeeUtil} from "../employee/employee-util";
import {AnimalUtil} from "../animal/animal-util";
import {DateUtil} from "../date-util";
import {AverageValueDto} from "../dto/average-value-dto";

export class ConsultationUtil {

    private constructor() {
    }

    public static getAverageValuePerConsultation(consultationName?: string[]): Map<string, number> {
        const averageValues: AverageValueDto[] = [];
        let consultations: ConsultationDto[];

        if (!consultationName) {
            consultations = this.getAllConsultation();
        } else {
            consultations = this
                .getAllConsultation()
                .filter(consultation => consultationName.includes(consultation.name))
            ;
        }

        consultations.forEach(
            consultation => {
                const averageValue = averageValues
                    .find(averageValue => averageValue.code === consultation.name,)
                ;

                if (averageValue) {
                    averageValue.totalValue = averageValue.totalValue + consultation.value;
                    averageValue.amount++;
                } else {
                    const newAverageValue: AverageValueDto = {
                        code: consultation.name,
                        totalValue: consultation.value,
                        amount: 1
                    };

                    averageValues.push(newAverageValue);
                }
            }
        );

        const resultMap: Map<string, number> = new Map();

        averageValues.forEach(
            averageValue => {
                const mapValue = resultMap.get(averageValue.code);

                if (!mapValue) {
                    const totalValue = averageValue.totalValue / averageValue.amount;
                    resultMap.set(averageValue.code, parseFloat(totalValue.toFixed(2)));
                }
            }
        );

        return resultMap;
    }

    public static getSpeciesWithMoreQueriesByName(name?: string[]): Map<string, number> {
        const resultMap: Map<string, number> = new Map();
        let consultations: ConsultationDto[];

        if (!name) {
            consultations = this.getAllConsultation()
        } else {
            consultations = this
                .getAllConsultation()
                .filter(consultation => name.includes(consultation.animal.species.name))
            ;
        }

        consultations.forEach(
            consultation => {
                const name = consultation.animal.species.name;
                let amount = resultMap.get(name);

                if (!amount) {
                    resultMap.set(name, 1)
                } else {
                    resultMap.set(name, amount + 1)
                }
            }
        );

        return resultMap;
    }

    public static getNumberOfQueriesByDate(startDate: Date, endDate: Date): Map<string, number> {
        const resultMap: Map<string, number> = new Map();

        this
            .getAllConsultation()
            .filter(consultation => consultation.date >= startDate && consultation.date <= endDate)
            .forEach(
                consultation => {
                    const dateString = DateUtil.formatDate(consultation.date);
                    let amount = resultMap.get(dateString);

                    if (!amount) {
                        resultMap.set(dateString, 1)
                    } else {
                        resultMap.set(dateString, amount + 1)
                    }
                }
            )
        ;

        return resultMap;
    }

    public static getAllConsultationName(): string[] {
        const allConsultationName = this
            .getAllConsultation()
            .map(consultation => consultation.name);

        return Array.from(new Set(allConsultationName));
    }

    public static findById(id: number): ConsultationDto {
        let consultation = this
            .getAllConsultation()
            .find((consultation) => consultation.id == id);

        if (!consultation) {
            throw new Error(`Consultation with id ${id} not found.`);
        }

        return consultation;
    }

    private static getAllConsultation(): ConsultationDto[] {
        return [
            {
                id: 1,
                name: 'Con. de Rotina',
                note: 'Verificação geral de saúde',
                date: new Date('2024-01-12'),
                value: 150.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 2,
                name: 'Vacinação',
                note: 'Vacina anual',
                date: new Date('2024-01-12'),
                value: 90.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 3,
                name: 'Con. de Emergência',
                note: 'Animal com dor abdominal',
                date: new Date('2024-01-12'),
                value: 200.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 4,
                name: 'Vacinação',
                note: 'Acompanhamento pós-cirurgia',
                date: new Date('2024-01-12'),
                value: 100.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 5,
                name: 'Vacinação',
                note: 'Vacinação antirrábica',
                date: new Date('2024-01-12'),
                value: 80.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 6,
                name: 'Con. de Rotina',
                note: 'Verificação de peso',
                date: new Date('2024-01-12'),
                value: 120.00,
                animal: AnimalUtil.findById(5),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 7,
                name: 'Vacinação',
                note: 'Vacinação contra gripe canina',
                date: new Date('2024-01-12'),
                value: 85.00,
                animal: AnimalUtil.findById(5),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 8,
                name: 'Vacinação',
                note: 'Avaliação pós-tratamento',
                date: new Date('2024-02-04'),
                value: 110.00,
                animal: AnimalUtil.findById(5),
                employee: EmployeeUtil.findById(1)
            },
            {
                id: 9,
                name: 'Vacinação',
                note: 'Coleta de sangue para exames',
                date: new Date('2024-01-12'),
                value: 150.00,
                animal: AnimalUtil.findById(5),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 10,
                name: 'Con. de Rotina',
                note: 'Checagem de vacinas',
                date: new Date('2024-01-12'),
                value: 120.00,
                animal: AnimalUtil.findById(10),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 11,
                name: 'Vacinação',
                note: 'Vacinação contra raiva',
                date: new Date('2024-01-27'),
                value: 80.00,
                animal: AnimalUtil.findById(10),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 12,
                name: 'Raio-X',
                note: 'Animal com dificuldade para respirar',
                date: new Date('2024-01-27'),
                value: 250.00,
                animal: AnimalUtil.findById(10),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 13,
                name: 'Raio-X',
                note: 'Raio-x de quadril',
                date: new Date('2024-01-27'),
                value: 180.00,
                animal: AnimalUtil.findById(11),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 14,
                name: 'Vacinação',
                note: 'Verificação de recuperação pós-cirurgia',
                date: new Date('2024-01-30'),
                value: 90.00,
                animal: AnimalUtil.findById(11),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 15,
                name: 'Raio-X',
                note: 'Vacina polivalente',
                date: new Date('2024-02-30'),
                value: 100.00,
                animal: AnimalUtil.findById(10),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 16,
                name: 'Vacinação',
                note: 'Exame completo de sangue',
                date: new Date('2024-02-30'),
                value: 140.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 17,
                name: 'Con. de Rotina',
                note: 'Avaliação geral',
                date: new Date('2024-02-30'),
                value: 120.00,
                animal: AnimalUtil.findById(8),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 18,
                name: 'Con. de Emergência',
                note: 'Fratura na pata',
                date: new Date('2024-02-04'),
                value: 220.00,
                animal: AnimalUtil.findById(8),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 19,
                name: 'Raio-X',
                note: 'Ultrassom abdominal',
                date: new Date('2024-02-04'),
                value: 200.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(4)
            },
            {
                id: 20,
                name: 'Vacinação',
                note: 'Vacina antirrábica',
                date: new Date('2024-02-04'),
                value: 80.00,
                animal: AnimalUtil.findById(1),
                employee: EmployeeUtil.findById(4)
            }
        ];
    }
}

