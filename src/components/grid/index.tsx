import upImg from '../../assets/up.png'
import downImg from '../../assets/down.png'
import {Level} from '../../helpers/imc'

type props = {
    item: Level;
}

export const Grid = ({item}: props) =>{
    return (
        <div className='bg-color rounded-xl mx-auto text-center flex flex-col p-5 w-72 md:w-40 justify-center lg:w-auto' style = {{backgroundColor: item.color}}>
            <div className='flex justify-center items-center'>
                <img className='w-8' src={item.icon === 'down' ? downImg : upImg} alt="" />
            </div>
            <div className='font-bold text-xl'>{item.title}</div>
            {item.yourImc &&
            <div className='{styles.yourImc}'>Seu imc é de: {item.yourImc} kg/m²</div>
            }
            <div className='text-sm mt-4'>
                <>
                Seu IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}