import './Header.sass'

export default function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <div className='header_money'>50 000 000</div>
        <div className='header_funs'>0</div>
      </div>
      <div className='header_rigth'>
        <div className='header_company'>company</div>
        <div className='header_date'>12.12.2024</div>
      </div>
    </div>
  )
}
