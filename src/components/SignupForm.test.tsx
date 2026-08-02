import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('shows a success message after submitting a valid email', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /notify me/i }))

    expect(await screen.findByRole('status')).toHaveTextContent(
      /you're on the list/i,
    )
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /notify me/i }))

    expect(await screen.findByRole('alert')).toHaveTextContent(
      /valid email address/i,
    )
  })
})
