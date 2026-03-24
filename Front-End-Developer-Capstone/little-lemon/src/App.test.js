import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders booking link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )

  expect(
    screen.getByRole('link', { name: /prenota un tavolo/i }),
  ).toBeInTheDocument()
})
