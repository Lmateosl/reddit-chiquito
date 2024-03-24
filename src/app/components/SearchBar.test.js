import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders input element', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('allows users to enter text', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Buscar' } });
    expect(inputElement.value).toBe('Buscar');
  });

  test('button has correct text', () => {
    render(<SearchBar buttonText="Buscar"/>);
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });

  test('calls onClickHandler when button is clicked', () => {
    const onClickHandler = jest.fn();
    render(<SearchBar onClickHandler={onClickHandler} buttonText="Buscar"/>);
    fireEvent.click(screen.getByRole('button', { name: /buscar/i }));
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});