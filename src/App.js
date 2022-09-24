import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {BiUser} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {FaPlane, FaSuitcaseRolling, FaPlaneArrival, FaPlaneDeparture} from 'react-icons/fa'
import 'react-pure-modal/dist/react-pure-modal.min.css';
import FlightData from './api/Flights.json'
import FlightItem from './components/FlightItem';

function App() {
  const [modal, setModal] = useState(false);
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    setFlight(FlightData)
  }, [])

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  return (
      <div>
        <div className='w-80 h-24 bg-regal-blue/70 absolute z-[1000] top-6 left-14 rounded cursor-pointer drop-nav'>
          <div className='w-80 h-24 flex items-center justify-around'>
            <BiUser size={40} className='text-white' />
            <div className='space-y-2'>
              <h1 className='text-white'>(123456789034) Ankara</h1>
              <h6 className='text-gray-300 text-xs'>ESB - Esenboğa Havalimanı</h6>
            </div>
          </div>
          <ul className='w-80 h-auto bg-regal-blue/80 absolute z-[1000] top-24 drop-nav-ul hover:transition-all'>
            <li className='h-16 w-80 flex items-center justify-around'>
              <AiOutlinePlus size={20} className='text-white flex-initial w-16' />
              <h2 className='text-white flex-1'>Kullanıcı Bilgileri</h2>
            </li>
            <li className='h-16 w-80 flex items-center justify-around'>
              <AiOutlinePlus size={20} className='text-white flex-initial w-16' />
              <h2 className='text-white flex-1'>Ayarlar</h2>
            </li>
            <li className='h-16 w-80 flex items-center justify-around rounded-b-lg'>
              <AiOutlinePlus size={20} className='text-white flex-initial w-16' />
              <h2 className='text-white flex-1'>Çıkış Yap</h2>
            </li>
          </ul>
        </div>
        <div className='absolute z-[1000] top-6 right-14'>
          <input className='w-60 h-12 bg-regal-blue/70 text-white pl-4 rounded' type='text' placeholder='Arama Yap'></input>
        </div>
        <div className='flex w-screen justify-center'>
          <div className='h-16 w-96 bg-regal-blue/70 absolute z-[1000] bottom-0 cursor-pointer rounded-t-xl'>
            <ul className='flex justify-around'>
              <li onClick={toggleModal} className='w-16 h-16 bg-regal-blue flex items-center justify-center hover:rounded-t-xl hover:-mt-6 hover:h-[88px] hover:transition-all'>
                <FaPlane className='text-white' size={40} />
              </li>
              <li onClick={toggleModal} className='w-16 h-16 bg-regal-blue flex items-center justify-center hover:rounded-t-xl hover:-mt-6 hover:h-[88px] hover:transition-all'>
                <FaSuitcaseRolling className='text-white' size={40} />
              </li>
              <li onClick={toggleModal} className='w-16 h-16 bg-regal-blue flex items-center justify-center hover:rounded-t-xl hover:-mt-6 hover:h-[88px] hover:transition-all'>
                <FaPlaneArrival className='text-white' size={40} />
              </li>
              <li onClick={toggleModal} className='w-16 h-16 bg-regal-blue flex items-center justify-center hover:rounded-t-xl hover:-mt-6 hover:h-[88px] hover:transition-all'>
                <FaPlaneDeparture className='text-white' size={40} />
              </li>
            </ul>
          </div>
        </div>
      {modal && (
        <div className="modal absolute z-[1000] w-screen h-screen">
          <div className="modal-content h-screen p-10 rounded">
            <div className='w-full h-16 bg-[#4961BC] flex items-center justify-between px-6'>
              <h2 className='text-white text-2xl font-semibold'>Uçuşları Göster</h2>
              <button className="close-modal" onClick={toggleModal}>
                <AiOutlineClose className='text-white' size={35} />
              </button>
            </div>
            <div className='bg-white'>
              <div>
                <h1 className='text-[#4961BC] text-3xl font-semibold p-16'>Uçuşlar</h1>
              </div>
              <div className='flex p-6 font-bold text-[#757575] border-b-2 border-[#757575] text-xl'>
                <h2 className='flex-1'>Tekil Uçuş No</h2>
                <h2 className='flex-1'>Kalkış Tarihi</h2>
                <h2 className='flex-1'>Tahmini Varış Tarihi</h2>
                <h2 className='flex-1'>Kalkış Yeri</h2>
                <h2 className='flex-1'>Varış Yeri</h2>
              </div>
              <ul>
                <li>
                    {flight?.map((item, index) => {
                      return <FlightItem 
                      key={index} 
                      flightno={item.flightno} 
                      departuredate={item.departuredate} 
                      arrivaldate={item.arrivaldate}
                      departurecity={item.departurecity}
                      destinationcity={item.destinationcity}
                      />
                    })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <MapContainer center={[39.949, 32.830]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      </div>
  );
}

export default App;
