import Throughthepark from '../components/svg/ThroughThePark'

export default function About () {
  return (
    <>
      <header className='mb-8 w-11/12 md:w-7/12 m-auto'>
        <h1 className='text-color-primary text-3xl text-center font-bold mt-9 mb-9'>
          A cerca de Nature time
        </h1>
        <p className='text-color-primary text-center font-light text-xl'>
          Nature Time es una app educativa para explorar y aprender sobre la increíble fauna de Colombia, empezando por la biodiversidad de Fusagasugá.
        </p>

        <div className='
              w-full max-w-2xl
              aspect-video
              mt-6 ml-auto mr-auto
              rounded-xl
              overflow-hidden
            '
        >
          <Throughthepark />
        </div>

      </header>

      <section className='w-11/12 md:w-7/12 m-auto'>
        <p className='text-color-primary'>
          El proyecto “Nature Time” nace como una iniciativa para <strong> fomentar en la población del municipio de Fusagasugá el interés y conocimiento sobre la biodiversidad colombiana, </strong> especialmente la fauna que habita en el país. Con este esfuerzo, buscamos que más personas valoren la importancia de la riqueza natural que nos rodea y comprendan la necesidad de preservarla para las futuras generaciones.
        </p>

        <h2 className='text-color-primary text-2xl font-bold mt-9 mb-9'>
          Nuestro objetivo
        </h2>
        <p className='text-color-primary'>
          Desarrollar un software educativo que sirva como apoyo para la formación y aprendizaje sobre la fauna de Colombia, promoviendo el interés por la naturaleza en la población de Fusagasugá. Nuestro propósito es brindar un recurso <strong>accesible y didáctico</strong> para acercar a las personas a la biodiversidad de su región y país.
        </p>

        <h2 className='text-color-primary text-2xl font-bold mt-9 mb-9'>
          La importancia de este proyecto
        </h2>
        <p className='text-color-primary'>
          El proyecto Nature Time resalta <strong>la relevancia de conocer la riqueza natural del territorio colombiano.</strong> Este conocimiento es fundamental para incentivar prácticas de conservación, fomentar el aprecio por la biodiversidad y fortalecer la conexión de la comunidad con el entorno natural que la rodea. A través de una plataforma interactiva, la población podrá explorar y aprender sobre diversas especies de fauna, sus hábitats y características, generando una mayor conciencia ecológica y responsabilidad hacia el cuidado del ambiente.
        </p>
        <p className='text-color-primary mt-5'>
          La idea detrás de esta iniciativa es proporcionar a la comunidad una herramienta accesible que motive a conocer más sobre su patrimonio natural y a apreciar el papel crucial que la fauna desempeña en los ecosistemas. Nature Time se enfoca en crear un software educativo y dinámico que utiliza la riqueza de la fauna colombiana como recurso pedagógico, ofreciendo contenidos accesibles que fomentan el respeto y la valoración de la biodiversidad nacional.
        </p>
      </section>

    </>
  )
}
