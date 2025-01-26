import ConverterForm from "./components/ConverterForm"
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <ConverterForm />
      <Footer/>
    </div>
  )
}

export default App;