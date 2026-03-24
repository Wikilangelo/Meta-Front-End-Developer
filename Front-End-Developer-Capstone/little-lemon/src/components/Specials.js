const specials = [
  {
    title: 'Greek Salad',
    description: 'Insalata fresca con pomodori, cetrioli, olive e feta.',
  },
  {
    title: 'Bruschetta',
    description: 'Pane tostato con pomodoro, aglio e basilico.',
  },
  {
    title: 'Lemon Dessert',
    description: 'Dolce al limone dal gusto fresco e delicato.',
  },
]

function Specials() {
  return (
    <section className="specials">
      <h2>Specialità della settimana</h2>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <article key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Specials
