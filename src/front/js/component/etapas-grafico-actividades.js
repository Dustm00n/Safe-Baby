import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export const EtapasGraficoActividades = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [
            'Etapa 1',
            'Etapa 2',
            'Etapa 3',
            'Etapa 4',
            'Etapa 5'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 20, 10,],
            backgroundColor: [
                'rgb(207, 73, 73)',
                'rgb(70, 173, 191)',
                'rgb(255, 152, 60)',
                'rgb(163, 163, 255)',
                'rgb(255, 155, 155)'
            ],
            hoverOffset: 5
        }],
    };

    return (
        <>
            <div className="container-graphic h-100 px-0 col-6">
                <div className="card-graphic w-75 my-5">
                    <div className="card-body-graphic">
                        <Doughnut data={data} />
                    </div>
                </div>
            </div>
        </>
    );

};
