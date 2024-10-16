import {AnimalDto} from "../animal/animal-dto";
import {EmployeeDto} from "../employee/employee-dto";

export interface ConsultationDto {
    id: number;
    name: string;
    note: string;
    date: Date;
    value: number;
    animal: AnimalDto,
    employee: EmployeeDto,
}
