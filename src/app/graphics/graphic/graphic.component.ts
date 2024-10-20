import {Component, OnInit} from '@angular/core';
import {ConsultationUtil} from "../../utils/consultation/consultation-util";
import {SpeciesUtil} from "../../utils/species/species-util";
import {AnimalUtil} from "../../utils/animal/animal-util";
import {EmployeeUtil} from "../../utils/employee/employee-util";

@Component({
    selector: 'app-graphic',
    templateUrl: './graphic.component.html',
    styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

    graphicOne: any;

    graphicTwo: any;

    graphicThree: any;

    graphicFour: any;

    graphicFive: any;

    endDateGraphicOne!: Date;

    startDateGraphicOne!: Date;

    specieNameGraphicTwo!: string[];

    consultationNameGraphicThree!: string[];

    employeeNamesGraphicFive!: string[];

    allSpeciesNames: string[] = this.getSpeciesName();

    allConsultationNames: string[] = this.getConsultationNames();

    allEmployeeNames: string[] = this.getEmployeeNames();

    public constructor() {
    }

    public ngOnInit(): void {
        this.buildGraphicOne(new Date('1970-01-01'), new Date('2050-01-01'));
        this.buildGraphicTwo();
        this.buildGraphicThree();
        this.buildGraphicFour();
        this.buildGraphicFive();
    }

    public modelChangedGraphicOne(): void {
        this.buildGraphicOne(this.startDateGraphicOne, this.endDateGraphicOne);
    }

    public modelChangedGraphicTwo(): void {
        this.buildGraphicTwo();
    }

    public modelChangedGraphicThree(): void {
        this.buildGraphicThree();
    }

    public modelChangedGraphicFive(): void {
        this.buildGraphicFive();
    }

    private buildGraphicOne(startDate: Date, endDate: Date): void {
        if (!endDate) {
            endDate = new Date('2040-01-01');
        }

        if (!startDate) {
            startDate = new Date(-8640000000000000);
        }

        let numberOfQueriesByDate = ConsultationUtil.getNumberOfQueriesByDate(startDate, endDate);

        this.graphicOne = {
            xAxis: {
                type: 'category',
                data: [...numberOfQueriesByDate.keys()],
                axisLabel: {
                    rotate: 0,
                    interval: 0
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Consultas',
                    data: [...numberOfQueriesByDate.values()],
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            ],
            title: {
                text: 'Consultas por Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            }
        };
    }

    private buildGraphicTwo(): void {
        let numberOfQueriesByDate;

        if (!this.specieNameGraphicTwo || this.specieNameGraphicTwo.length === 0) {
            numberOfQueriesByDate = ConsultationUtil.getSpeciesWithMoreQueriesByName();
        } else {
            numberOfQueriesByDate = ConsultationUtil.getSpeciesWithMoreQueriesByName(this.specieNameGraphicTwo)
        }

        this.graphicTwo = {
            xAxis: {
                type: 'category',
                data: [...numberOfQueriesByDate.keys()],
                axisLabel: {
                    rotate: 0,
                    interval: 0
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Consultas',
                    data: [...numberOfQueriesByDate.values()],
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            ],
            title: {
                text: 'Espécies com mais Consultas',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            }
        };
    }

    private buildGraphicThree(): void {
        let data;

        if (!this.consultationNameGraphicThree || this.consultationNameGraphicThree.length === 0) {
            data = ConsultationUtil.getAverageValuePerConsultation();
        } else {
            data = ConsultationUtil.getAverageValuePerConsultation(this.consultationNameGraphicThree)
        }

        this.graphicThree = {
            xAxis: {
                type: 'category',
                data: [...data.keys()],
                axisLabel: {
                    rotate: 0,
                    interval: 0
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Valor Médio',
                    data: [...data.values()],
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: 'R$ {c}'
                    }
                }
            ],
            title: {
                text: 'Valor médio por consulta',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            }
        };
    }

    private buildGraphicFour(): void {
        let data = AnimalUtil.getAnimalsGroupedBySpecies();

        this.graphicFour = {
            title: {
                text: 'Animais por Éspecie',
                subtext: 'Distribuição de animais por éspecie',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Quantidade',
                    type: 'pie',
                    radius: '50%',
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: '{b}: {d}%' // Exibe o nome e a porcentagem
                        }
                    }
                }
            ],
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            }
        };
    }

    private buildGraphicFive(): void {
        let data;

        if (!this.employeeNamesGraphicFive || this.employeeNamesGraphicFive.length === 0) {
            data = ConsultationUtil.getNumberQueriesByEmployee();
        } else {
            data = ConsultationUtil.getNumberQueriesByEmployee(this.employeeNamesGraphicFive)
        }

        this.graphicFive = {
            title: {
                text: 'Consultas por Funcionário',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: [...data.keys()]
            },
            grid: {
                left: '20%',
                right: '10%',
                bottom: '10%',
                top: '10%'
            },
            series: [
                {
                    type: 'bar',
                    data: [...data.values()],
                    barWidth: '50%',
                }
            ]
        };
    }

    private getSpeciesName(): string[] {
        return [
            ...SpeciesUtil.getAllSpeciesName()
        ];
    }

    private getConsultationNames(): string[] {
        return [
            ...ConsultationUtil.getAllConsultationName()
        ];
    }

    private getEmployeeNames(): string[] {
        return [
            ...EmployeeUtil.getAllEmployeeNames()
        ];
    }
}
