import {SpeciesDto} from "../species/species-dto";
import {CustomerDto} from "../customer/customer-dto";

export interface AnimalDto {
    id: number;
    name: string;
    note: string;
    birthday: Date;
    sex: string;
    species: SpeciesDto,
    customer: CustomerDto
}
