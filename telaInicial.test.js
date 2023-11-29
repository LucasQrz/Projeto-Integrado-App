import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TelaAutenticacao from './TelaAutenticacao';

describe('TelaAutenticacao', () => {
 it('navigates to Login screen when "Acessar Tela Login" button is pressed', () => {
    const { getByText } = render(<TelaAutenticacao />);
    const button = getByText('Acessar Tela Login');

    fireEvent.press(button);

    // Verifica se a tela de login foi chamada corretamente
    // (essa parte depende da implementação do seu sistema de navegação)
 });

 it('navigates to Cadastro screen when "Acessar Tela Cadastro" button is pressed', () => {
    const { getByText } = render(<TelaAutenticacao />);
    const button = getByText('Acessar Tela Cadastro');

    fireEvent.press(button);

    // Verifica se a tela de cadastro foi chamada corretamente
    // (essa parte depende da implementação do seu sistema de navegação)
 });
});