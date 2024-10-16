import {AnimalDto} from "./animal-dto";
import {SpeciesUtil} from "../species/species-util";
import {CustomerUtils} from "../customer/customer-util";
import {PieDataDto} from "../dto/pie-data-dto";

export class AnimalUtil {

    private constructor() {
    }

    public static getAnimalsGroupedBySpecies(): PieDataDto[] {
        const pieDataList: PieDataDto[] = [];

        this.getAllAnimal().forEach(
            animal => {
                const speciesName = animal.species.name;
                const pieData = pieDataList.find(pieData => pieData.name === speciesName);

                if (pieData) {
                    pieData.value++;
                } else {
                    const newPieData = {
                      name: speciesName,
                      value: 1,
                    };

                    pieDataList.push(newPieData);
                }
            }
        );

        return pieDataList
    }

    public static findById(id: number): AnimalDto {
        let animal = this
            .getAllAnimal()
            .find((animal) => animal.id == id);

        if (!animal) {
            throw new Error(`Animal with id ${id} not found.`);
        }

        return animal;
    }

    private static getAllAnimal(): AnimalDto[] {
        return [
            {
                id: 1,
                name: "Toby",
                note: "Cachorro muito brincalhão",
                birthday: new Date("2020-02-15"),
                sex: "M",
                species: SpeciesUtil.findById(2),
                customer: CustomerUtils.findById(1)
            },
            {
                id: 2,
                name: "Mingau",
                note: "Gato que adora dormir",
                birthday: new Date("2019-05-20"),
                sex: "M",
                species: SpeciesUtil.findById(1),
                customer: CustomerUtils.findById(2)
            },
            {
                id: 3,
                name: "Lola",
                note: "Cachorra de porte médio, muito dócil",
                birthday: new Date("2018-07-11"),
                sex: "F",
                species: SpeciesUtil.findById(2),
                customer: CustomerUtils.findById(3)
            },
            {
                id: 4,
                name: "Pipoca",
                note: "Coelho muito curioso",
                birthday: new Date("2021-03-05"),
                sex: "M",
                species: SpeciesUtil.findById(3),
                customer: CustomerUtils.findById(4)
            },
            {
                id: 5,
                name: "Max",
                note: "Cachorro grande e protetor",
                birthday: new Date("2017-12-12"),
                sex: "M",
                species: SpeciesUtil.findById(2),
                customer: CustomerUtils.findById(5)
            },
            {
                id: 6,
                name: "Bela",
                note: "Gata muito independente",
                birthday: new Date("2016-04-30"),
                sex: "F",
                species: SpeciesUtil.findById(1),
                customer: CustomerUtils.findById(6)
            },
            {
                id: 7,
                name: "Bolinha",
                note: "Hamster muito ativo",
                birthday: new Date("2021-08-15"),
                sex: "M",
                species: SpeciesUtil.findById(1),
                customer: CustomerUtils.findById(7)
            },
            {
                id: 8,
                name: "Mel",
                note: "Papagaio muito falante",
                birthday: new Date("2015-11-25"),
                sex: "F",
                species: SpeciesUtil.findById(5),
                customer: CustomerUtils.findById(8)
            },
            {
                id: 9,
                name: "Rex",
                note: "Cachorro muito enérgico",
                birthday: new Date("2019-09-01"),
                sex: "M",
                species: SpeciesUtil.findById(2),
                customer: CustomerUtils.findById(9)
            },
            {
                id: 10,
                name: "Nina",
                note: "Gata muito brincalhona",
                birthday: new Date("2020-05-12"),
                sex: "F",
                species: SpeciesUtil.findById(1),
                customer: CustomerUtils.findById(10)
            },
            {
                id: 11,
                name: "Zoe",
                note: "Cachorra adora passeios",
                birthday: new Date("2017-02-08"),
                sex: "F",
                species: SpeciesUtil.findById(2),
                customer: CustomerUtils.findById(11)
            },
            {
                id: 12,
                name: "Lulu",
                note: "Peixe dourado muito tranquilo",
                birthday: new Date("2022-06-17"),
                sex: "F",
                species: SpeciesUtil.findById(2),
                customer: CustomerUtils.findById(12)
            },
            {
                id: 13,
                name: "Spike",
                note: "Tartaruga muito calma",
                birthday: new Date("2014-01-09"),
                sex: "M",
                species: SpeciesUtil.findById(10),
                customer: CustomerUtils.findById(13)
            },
            {
                id: 14,
                name: "Bobby",
                note: "Cavalo dócil e amigável",
                birthday: new Date("2013-03-28"),
                sex: "M",
                species: SpeciesUtil.findById(5),
                customer: CustomerUtils.findById(14)
            },
            {
                id: 15,
                name: "Luna",
                note: "Gata muito esperta",
                birthday: new Date("2018-10-10"),
                sex: "F",
                species: SpeciesUtil.findById(1),
                customer: CustomerUtils.findById(15)
            }
        ]
    }
}
