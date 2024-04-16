import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id='header'>
      <img src={logo} alt="" />
      <h1>Calculadora de Investimento</h1>
    </header>
  )
}
