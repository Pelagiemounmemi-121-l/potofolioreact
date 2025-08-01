
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function CompetencesPage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'bootstrap','TypeScript', 'Tailwind', 'Next.js'],
    datasets: [
      {
        label: 'Niveau de compétence',
        data: [9, 8, 9, 8, 7, 6, 7, 7],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'aqua',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
        angleLines: {
          color: '#ccc',
        },
        grid: {
          color: '#eee',
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <section  id='comp'>
    <div className="container py-5 " style={{ marginTop: '15%'}}  >
      <h1 className="text-center mb-4 " > <span style={{color: 'aqua'}} >🧠 Mes</span> Compétences Front-End</h1>
      <div style={{ position: 'relative', width: '100%', height: '90vh' }} data-aos="zoom-in-up">
  <Radar data={data} options={{ maintainAspectRatio: false }} />
</div>

      
    </div>
    </section>
  );
}

export default CompetencesPage;
