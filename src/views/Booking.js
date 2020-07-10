import React from 'react';

// halaman Form (controlled form)

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      jumlah: 0,
      telepon: '',
      alamat: ''
    }
  }

  handleNamaChange = (event) => {
    this.setState({
      nama: event.target.value
    })
  }

  handleJumlahChange = (event) => {
    this.setState({
      jumlah: event.target.value
    })
  }

  handleTeleponChange = (event) => {
    this.setState({
      telepon: event.target.value
    })
  }

  handleAlamatChange = (event) => {
    this.setState({
      alamat: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`
     Nama Pemesan : ${this.state.nama}
     Jumlah Meja : ${this.state.jumlah} 
     No. Telepon : ${this.state.telepon} 
     Alamat Pemesan : ${this.state.alamat}`)
    event.preventDefault()
  }

  render () {

    return (
      <div id="Booking" className="Section-Booking">
        <div className="Title">
          <h2 className="Title">Booking Meja</h2>
        </div>
  
        <div className="Book-Form">
          <form onSubmit={this.handleSubmit} > 
            <label>Nama :
              <br/>
              <input className="Form-Field" name="nama" type="text"
               value={this.state.nama} onChange={this.handleNamaChange} />
            </label>
              <br/>
            <label>Jumlah Meja :
              <br/>
              <input className="Form-Field" name="jumlah" type="number"
               value={this.state.jumlah} onChange={this.handleJumlahChange}
              />
            </label>
              <br/>
            <label>Telepon :
              <br/>
              <input className="Form-Field" name="telepon" type="text"
               value={this.state.telepon} onChange={this.handleTeleponChange} />
            </label>
              <br/>
            <label>
              Alamat:
              <br/>
              <textarea className="Form-Field" name="alamat"
               value={this.state.alamat} onChange={this.handleAlamatChange} />
            </label>
            <br/>
            <button className="Tombol-dua" type="submit">
              Pesan
            </button>
          </form>
  
        </div>
      </div>
    ); 
  }
}