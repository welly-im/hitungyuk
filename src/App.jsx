/* eslint-disable react/prop-types */
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const TaxCard = ({ title, description, classicon }) => (
  <div>
  <div className="card center" style={
    {
      width: '100px',
      margin: 'auto',
    }
  } title={description}>
    <div className="card-body bg-warning p-0 justify-content-center text-center hover-card">
      <i className={classicon} style={
        {
          fontSize: '3.5rem',
          color: '#000'
        }
      }></i>
    </div>
  </div>
   <p className="card-title mt-2 fw-semibold text-center">{title}</p>
  </div>
  
);


function App() {

  return (
    <>
      <div className='text-center'>
        <h2 className='fw-bold'>Hitung Yuk!</h2>
      </div>
      <hr />
      <div>
        <div className='card shadow-sm bg-warning bg-opacity-75 py-2 px-4'>
          <p>
          haloo teman teman silahkan pilih disini ya mau hitung apa <br/>
          haloo teman teman silahkan pilih disini ya mau hitung apa <br/>
          bingungg mau isi apa
          </p>
        </div>
      </div>
      <div>
        <h5 className='fw-bolder mt-5 mb-3 d-flex'>Mau hitung apa hari ini ?</h5>
        <div className="row row-cols-3 gx-5 gy-5">
          <div className="col">
            <TaxCard
              title="Pajak Bea Cukai"
              description="Informasi tambahan atau deskripsi mengenai Pajak Bea Cukai."
              classicon="w-auto bi bi-cash-coin"
            />
          </div>
          <div className="col">
            <TaxCard
              title="Pajak Penghasilan"
              description="Informasi tambahan atau deskripsi mengenai Pajak Penghasilan."
              classicon="bi bi-cash-stack"
            />
          </div>
          <div className="col">
            <TaxCard
              title="Pajak Penjualan"
              description="Informasi tambahan atau deskripsi mengenai Pajak Penjualan."
              classicon="bi bi-cart-check"
            />
          </div>
          <div className="col">
            <TaxCard
              title="Pajak Bumi dan Bangunan"
              description="Informasi tambahan atau deskripsi mengenai Pajak Bumi dan Bangunan."
              classicon="bi bi-house"
            />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
