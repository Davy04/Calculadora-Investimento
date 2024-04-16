

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">
            Investimento Inicial
          </label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">
            Investimento Anual
          </label>
          <input type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">
            Retorno esperado
          </label>
          <input
            type="number" required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange('expectedReturn', event.target.value)
            } />
        </p>
        <p>
          <label htmlFor="">
            Duração
          </label>
          <input required
            value={userInput.duration}
            onChange={(event) =>
              onChange('duration', event.target.value)
            } />
        </p>
      </div>
    </section>
  )
}
