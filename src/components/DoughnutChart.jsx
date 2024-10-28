import { Doughnut } from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'

export function DoughnutChart ({ chartData, data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)' // Cambia el color del borde aquí
      }
    }
  }

  return (
    <Doughnut data={chartData} options={options} />
  )
}
