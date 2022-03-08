import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export const EtapasGraficoActividades = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(207, 73, 73)',
                'rgb(70, 173, 191)',
                'rgb(240, 190, 190)'
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
