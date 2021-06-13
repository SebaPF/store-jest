import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

// Si no existe el 'Snapshot', lo crea y luego lo comprueba y, cuando vuelvo a correr mis pruebas y ya existe, los Compara ... //
// jest --updateSnapshot // CUANDO QUIERA ACTUALIZAR MI SNAPSHOT CON NUEVOS CAMBIOS

const footer = mount(<Footer />);

describe('<Footer />', () => {
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });

  test('Footer Snapshot', () => {
    const foot = create(<Footer />);
    expect(foot.toJSON()).toMatchSnapshot();
  });

});
