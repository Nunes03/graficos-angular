import {SpeciesDto} from './species-dto';

export class SpeciesUtil {

    private constructor() {
    }

    public static getAllSpeciesName(): string[] {
        return this
            .getAllSpecies()
            .map(species => species.name);
    }

    public static findById(id: number): SpeciesDto {
        let species = this
            .getAllSpecies()
            .find((species) => species.id == id);

        if (!species) {
            throw new Error(`Species with id ${id} not found.`);
        }

        return species;
    }

    public static getAllSpecies(): SpeciesDto[] {
        return [
            {
                id: 1,
                name: 'Gato'
            },
            {
                id: 2,
                name: 'Cachorro'
            },
            {
                id: 3,
                name: 'Coelho'
            },
            {
                id: 5,
                name: 'Papagaio'
            },
            {
                id: 10,
                name: 'Chinchila'
            }
        ]
    }
}
