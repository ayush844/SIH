import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import './PieChart.css'

const PieChart = () => {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current){
            chartInstance.current.destroy()
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef,{
                type: "pie",
                data:{
                    labels: ["Konkani", "Marathi", "Hindi", "Others"],
                    datasets: [
                        {
                            data: [67, 23, 6, 4],
                            backgroundColor:[
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'gray'
                            ]
                        }
                    ]
                }
            
        })

        return () => {
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }

    }, [])

  return (
    <>
      <canvas ref={chartRef}/>
    </>
  )
}

export default PieChart;